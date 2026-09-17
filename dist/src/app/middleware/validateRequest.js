import httpStatus from "http-status";
import { AppError } from "../utils/AppError";
import { catchAsync } from "../utils/catchAsync";
export const validateRequest = (zodSchema) => {
    return catchAsync((req, _res, next) => {
        const payload = req.body ?? {};
        const result = zodSchema.safeParse(payload);
        if (!result.success) {
            // Report every failed field at once, prefixed with its path
            // (e.g. "patient.age"), instead of only the first issue.
            const errorMessage = result.error.issues
                .map((issue) => {
                const field = issue.path.join(".");
                return field ? `${field}: ${issue.message}` : issue.message;
            })
                .join(", ");
            throw new AppError(httpStatus.BAD_REQUEST, errorMessage);
        }
        req.body = result.data;
        next();
    });
};
//# sourceMappingURL=validateRequest.js.map