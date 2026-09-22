import crypto from "node:crypto";
import cookieParser from "cookie-parser";
import cors from "cors";
import express, {
	type NextFunction,
	type Application,
	type Request,
	type Response,
} from "express";
import httpStatus from "http-status";
import config from "./app/config";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler";
import { notFound } from "./app/middleware/notFound";
import { AuthRoutes } from "./app/module/auth/auth.route";
import { UserRoutes } from "./app/module/user/user.route";
import { redisClient } from "./app/lib/redis";
import { AnalyticsRoutes } from "./app/module/analytics/analytics.route";
import { AppointementRoutes } from "./app/module/appointment/appointment.route";
import { PaymentRoutes } from "./app/module/payment/payment.route";
import { PrescriptionRoutes } from "./app/module/prescription/prescription.route";
import { DoctorRoutes } from "./app/module/doctor/doctor.route";
import { ScheduleRoutes } from "./app/module/schedule/schedule.route";

const app: Application = express();

// credentials: true requires an explicit origin — the cors default of "*" makes
// the browser discard every response to a request sent with credentials.
if (!config.frontend_url) {
	throw new Error(
		"FRONTEND_URL is not set. Auth cookies cannot work without an explicit CORS origin.",
	);
}

app.use(
	cors({
		origin: config.frontend_url,
		credentials: true,
	}),
);

// Enable URL-encoded form data parsing
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", AuthRoutes);
app.use("/api/v1/user", UserRoutes);
app.use("/api/v1/appointment", AppointementRoutes);
app.use("/api/v1/doctor", DoctorRoutes);
app.use("/api/v1/schedule", ScheduleRoutes);
app.use("/api/v1/payment", PaymentRoutes);
app.use("/api/v1/prescription", PrescriptionRoutes);
app.use("/api/v1/analytics", AnalyticsRoutes);

app.get("/test", async (req: Request, res: Response, next: NextFunction) => {
	try {
		// 100000 > 999999 > 1000000
		const otp = crypto.randomInt(100000, 1000000); // 1, 2, 3, 4, 5, 6,7,8 ,9, 10 => X-11

		await redisClient.set("forgot-password-otp:patient1@gmail.com", "123456", {
			expiration: {
				type: "EX",
				value: 60,
			},
		});

		res.status(httpStatus.OK).json({
			success: true,
			message: "Welcome to PH Healthcare System Backend",
			data: otp,
		});
	} catch (error) {
		console.log(error);
		next(error);
	}
});

// Basic route
app.get("/", async (req: Request, res: Response) => {
	res.status(httpStatus.OK).json({
		success: true,
		message: "Welcome to PH Healthcare System Backend",
	});
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
