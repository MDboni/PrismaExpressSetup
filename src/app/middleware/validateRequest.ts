import type { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import type z from "zod";
import { AppError } from "../utils/AppError";
import { catchAsync } from "../utils/catchAsync";

export const validateRequest = (zodSchema: z.ZodObject) => {
	return catchAsync((req: Request, _res: Response, next: NextFunction) => {
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
