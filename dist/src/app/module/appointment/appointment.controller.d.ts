import type { Request, Response } from "express";
export declare const AppointmentController: {
    bookAppointment: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    payAppointment: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    bookAppointmentCallback: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    cancelAppointment: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    updateAppointmentStatus: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getMyAppointments: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getDoctorAppointments: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getAllAppointments: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getSingleAppointment: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
};
//# sourceMappingURL=appointment.controller.d.ts.map