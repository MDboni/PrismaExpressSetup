import multer from "multer";
import httpStatus from "http-status";
import { AppError } from "../utils/AppError";

// Set up Multer for handling file uploads
const storage = multer.memoryStorage();

export const upload = multer({
	storage: storage,
	limits: {
		fileSize: 5 * 1024 * 1024, // 5 MB
	},
	// Cloudinary is told to expect an image, so reject anything else here
	// instead of letting the upload fail halfway through.
	fileFilter: (_req, file, cb) => {
		if (!file.mimetype.startsWith("image/")) {
			return cb(
				new AppError(httpStatus.BAD_REQUEST, "Only image files are allowed"),
			);
		}

		cb(null, true);
	},
});
