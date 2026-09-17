import type { Request, Response } from "express";
export declare const ScheduleController: {
    createSchedule: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getMySchedules: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getAllSchedules: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getTodaysSchedules: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getScheduleById: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    updateSchedule: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    publishSchedule: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    deleteSchedule: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
};
//# sourceMappingURL=schedule.controller.d.ts.map