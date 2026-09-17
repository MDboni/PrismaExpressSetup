import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { AnalyticsServices } from "./analytics.service";
const getPatientAnalytics = catchAsync(async (req, res) => {
    const user = req.user;
    const result = await AnalyticsServices.getPatientAnalytics(user);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Patient Analytics Retrieved Successfully",
        data: result,
    });
});
const getDoctorAnalytics = catchAsync(async (req, res) => {
    const user = req.user;
    const result = await AnalyticsServices.getDoctorAnalytics(user);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Doctor Analytics Retrieved Successfully",
        data: result,
    });
});
const getAdminAnalytics = catchAsync(async (req, res) => {
    const result = await AnalyticsServices.getAdminAnalytics();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Admin Analytics Retrieved Successfully",
        data: result,
    });
});
export const AnalyticsController = {
    getPatientAnalytics,
    getDoctorAnalytics,
    getAdminAnalytics,
};
//# sourceMappingURL=analytics.controller.js.map