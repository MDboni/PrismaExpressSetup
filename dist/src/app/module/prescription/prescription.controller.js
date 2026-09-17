import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { PrescriptionServices } from "./prescription.service";
const createPrescription = catchAsync(async (req, res) => {
    const payload = req.body;
    const user = req.user;
    const result = await PrescriptionServices.createPrescription(payload, user);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Prescription Created And Emailed To Patient Successfully",
        data: result,
    });
});
const getSinglePrescription = catchAsync(async (req, res) => {
    const appointmentId = req.params.appointmentId;
    const user = req.user;
    const result = await PrescriptionServices.getSinglePrescription(appointmentId, user);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Prescription Retrieved Successfully",
        data: result,
    });
});
export const PrescriptionController = {
    createPrescription,
    getSinglePrescription,
};
//# sourceMappingURL=prescription.controller.js.map