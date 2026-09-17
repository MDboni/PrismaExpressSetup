import httpStatus from "http-status";
import { AppError } from "../../utils/AppError";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { UserServices } from "./user.service";
const uploadProfileImage = catchAsync(async (req, res) => {
    if (!req.file) {
        throw new AppError(httpStatus.BAD_REQUEST, "No File Provided.");
    }
    const userId = req.user?.userId;
    const result = await UserServices.uploadProfileImage(req.file?.buffer, userId);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Profile image uploaded successfully",
        data: result,
    });
});
export const UserController = {
    uploadProfileImage,
};
//# sourceMappingURL=user.controller.js.map