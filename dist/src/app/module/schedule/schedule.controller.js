import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { ScheduleServices } from "./schedule.service";
const createSchedule = catchAsync(async (req, res) => {
    const payload = req.body;
    const user = req.user;
    const result = await ScheduleServices.createSchedule(payload, user);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Schedule Created Successfully",
        data: result,
    });
});
const getMySchedules = catchAsync(async (req, res) => {
    const user = req.user;
    const { data, meta } = await ScheduleServices.getMySchedules(req.query, user);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Schedules Retrieved Successfully",
        data,
        meta,
    });
});
const getAllSchedules = catchAsync(async (req, res) => {
    const { data, meta } = await ScheduleServices.getAllSchedules(req.query);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Schedules Retrieved Successfully",
        data,
        meta,
    });
});
const getTodaysSchedules = catchAsync(async (req, res) => {
    const { data, meta } = await ScheduleServices.getTodaysSchedules(req.query);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Today's Schedules Retrieved Successfully",
        data,
        meta,
    });
});
const getScheduleById = catchAsync(async (req, res) => {
    const scheduleId = req.params.scheduleId;
    const result = await ScheduleServices.getScheduleById(scheduleId);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Schedule Retrieved Successfully",
        data: result,
    });
});
const updateSchedule = catchAsync(async (req, res) => {
    const scheduleId = req.params.scheduleId;
    const payload = req.body;
    const user = req.user;
    const result = await ScheduleServices.updateSchedule(scheduleId, payload, user);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Schedule Updated Successfully",
        data: result,
    });
});
const publishSchedule = catchAsync(async (req, res) => {
    const scheduleId = req.params.scheduleId;
    const user = req.user;
    const result = await ScheduleServices.publishSchedule(scheduleId, user);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Schedule Published Successfully",
        data: result,
    });
});
const deleteSchedule = catchAsync(async (req, res) => {
    const scheduleId = req.params.scheduleId;
    const user = req.user;
    const result = await ScheduleServices.deleteSchedule(scheduleId, user);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Schedule Deleted Successfully",
        data: result,
    });
});
export const ScheduleController = {
    createSchedule,
    getMySchedules,
    getAllSchedules,
    getTodaysSchedules,
    getScheduleById,
    updateSchedule,
    publishSchedule,
    deleteSchedule,
};
//# sourceMappingURL=schedule.controller.js.map