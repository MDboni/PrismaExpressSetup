import type { UploadApiResponse } from "cloudinary";
import httpStatus from "http-status";
import { cloudinary } from "../../lib/cloudinary";
import { prisma } from "../../lib/prisma";
import { AppError } from "../../utils/AppError";

const uploadProfileImage = async (buffer: Buffer, userId: string) => {
	const currentUser = await prisma.user.findUnique({
		where: {
			id: userId,
		},
		select: {
			imagePublicId: true,
			imageUrl: true,
		},
	});

	// Checked before uploading so a missing user can't leave an orphan file on
	// Cloudinary that no record points at.
	if (!currentUser) {
		throw new AppError(httpStatus.NOT_FOUND, "User not found");
	}

	const cloudinaryResult = await new Promise<UploadApiResponse>(
		(resolve, reject) => {
			cloudinary.uploader
				.upload_stream(
					{
						resource_type: "image",
					},

					async (error, result) => {
						if (error) {
							return reject(error);
						}

						if (!result) {
							return reject(new Error("No result returned from Cloudinary"));
						}

						resolve(result);
					},
				)
				.end(buffer);
		},
	);

	const updatedUser = await prisma.user.update({
		where: {
			id: userId,
		},

		data: {
			imageUrl: cloudinaryResult.secure_url,
			imagePublicId: cloudinaryResult.public_id,
		},

		omit: {
			password: true,
		},
	});

	// The new image is already saved, so cleaning up the old one is best-effort:
	// a failed delete must not turn a successful upload into an error response.
	if (currentUser.imagePublicId) {
		try {
			await cloudinary.uploader.destroy(currentUser.imagePublicId);
		} catch (error) {
			console.error("Failed to delete previous profile image", error);
		}
	}

	return updatedUser;
};

export const UserServices = {
	uploadProfileImage,
};
