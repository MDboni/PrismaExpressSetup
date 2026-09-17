import type { Request, Response } from "express";
export declare const DoctorController: {
    applyAsDoctor: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    verifyDoctorEmail: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    approveDoctor: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getAllDoctors: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    updateDoctorProfile: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getAvailableDoctorByTodaysSchedule: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getAllDoctorsListPublic: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getSingleDoctorPublicProfile: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
};
//# sourceMappingURL=doctor.controller.d.ts.map