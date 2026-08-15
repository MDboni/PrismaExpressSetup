import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import httpStatus from "http-status";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler";
import { notFound } from "./app/middleware/notFound";
import config from "./app/config";
import { AuthRoutes } from "./app/module/auth/auth.route";
const app = express();
app.use(cors({
    origin: config.frontend_url,
    credentials: true,
}));
// Enable URL-encoded form data parsing
app.use(express.urlencoded({ extended: true }));
// Middleware to parse JSON bodies
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/auth", AuthRoutes);
// Basic route
app.get("/", async (req, res) => {
    res.status(httpStatus.OK).json({
        success: true,
        message: "Welcome to PH Healthcare System Backend",
    });
});
app.use(globalErrorHandler);
app.use(notFound);
export default app;
//# sourceMappingURL=app.js.map