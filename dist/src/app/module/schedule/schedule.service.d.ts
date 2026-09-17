import { ScheduleStatus } from "../../../../prisma/generated/prisma/enums";
import { IQuery } from "../../interfaces";
import { RequestUser } from "../../middleware/checkAuth";
import { ICreateSchedulePayload, IUpdateSchedulePayload } from "./schedule.interface";
export declare const ScheduleServices: {
    createSchedule: (payload: ICreateSchedulePayload, user: RequestUser) => Promise<{
        doctor: {
            email: string;
            name: string;
            contactNumber: string | null;
        };
    } & {
        id: string;
        status: ScheduleStatus;
        isDeleted: boolean;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        doctorId: string;
        startDateTime: Date;
        endDateTime: Date;
        totalSlots: number;
        availableSlots: number;
        meetingLink: string;
    }>;
    getMySchedules: (query: IQuery, user: RequestUser) => Promise<{
        data: ({
            appointments: ({
                patient: {
                    email: string;
                    name: string;
                    userId: string;
                    id: string;
                    isDeleted: boolean;
                    deletedAt: Date | null;
                    createdAt: Date;
                    updatedAt: Date;
                    contactNumber: string | null;
                    address: string | null;
                };
            } & {
                id: string;
                status: import("../../../../prisma/generated/prisma/enums").AppointmentStatus;
                createdAt: Date;
                updatedAt: Date;
                patientId: string;
                joiningTime: Date | null;
                serialNumber: number | null;
                recordUrl: string | null;
                recordPublicId: string | null;
                prescriptionUrl: string | null;
                prescriptionPublicId: string | null;
                doctorId: string;
                scheduleId: string;
            })[];
        } & {
            id: string;
            status: ScheduleStatus;
            isDeleted: boolean;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            doctorId: string;
            startDateTime: Date;
            endDateTime: Date;
            totalSlots: number;
            availableSlots: number;
            meetingLink: string;
        })[];
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>;
    getAllSchedules: (query: IQuery) => Promise<{
        data: ({
            appointments: ({
                patient: {
                    email: string;
                    name: string;
                    userId: string;
                    id: string;
                    isDeleted: boolean;
                    deletedAt: Date | null;
                    createdAt: Date;
                    updatedAt: Date;
                    contactNumber: string | null;
                    address: string | null;
                };
            } & {
                id: string;
                status: import("../../../../prisma/generated/prisma/enums").AppointmentStatus;
                createdAt: Date;
                updatedAt: Date;
                patientId: string;
                joiningTime: Date | null;
                serialNumber: number | null;
                recordUrl: string | null;
                recordPublicId: string | null;
                prescriptionUrl: string | null;
                prescriptionPublicId: string | null;
                doctorId: string;
                scheduleId: string;
            })[];
        } & {
            id: string;
            status: ScheduleStatus;
            isDeleted: boolean;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            doctorId: string;
            startDateTime: Date;
            endDateTime: Date;
            totalSlots: number;
            availableSlots: number;
            meetingLink: string;
        })[];
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>;
    getScheduleById: (scheduleId: string) => Promise<{
        doctor: {
            email: string;
            name: string;
            userId: string;
            id: string;
            specialization: string;
        };
        appointments: ({
            patient: {
                email: string;
                name: string;
                userId: string;
                id: string;
                isDeleted: boolean;
                deletedAt: Date | null;
                createdAt: Date;
                updatedAt: Date;
                contactNumber: string | null;
                address: string | null;
            };
        } & {
            id: string;
            status: import("../../../../prisma/generated/prisma/enums").AppointmentStatus;
            createdAt: Date;
            updatedAt: Date;
            patientId: string;
            joiningTime: Date | null;
            serialNumber: number | null;
            recordUrl: string | null;
            recordPublicId: string | null;
            prescriptionUrl: string | null;
            prescriptionPublicId: string | null;
            doctorId: string;
            scheduleId: string;
        })[];
    } & {
        id: string;
        status: ScheduleStatus;
        isDeleted: boolean;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        doctorId: string;
        startDateTime: Date;
        endDateTime: Date;
        totalSlots: number;
        availableSlots: number;
        meetingLink: string;
    }>;
    updateSchedule: (scheduleId: string, payload: IUpdateSchedulePayload, user: RequestUser) => Promise<{
        doctor: {
            email: string;
            name: string;
            contactNumber: string | null;
        };
    } & {
        id: string;
        status: ScheduleStatus;
        isDeleted: boolean;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        doctorId: string;
        startDateTime: Date;
        endDateTime: Date;
        totalSlots: number;
        availableSlots: number;
        meetingLink: string;
    }>;
    publishSchedule: (scheduleId: string, user: RequestUser) => Promise<{
        id: string;
        status: ScheduleStatus;
        isDeleted: boolean;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        doctorId: string;
        startDateTime: Date;
        endDateTime: Date;
        totalSlots: number;
        availableSlots: number;
        meetingLink: string;
    }>;
    deleteSchedule: (scheduleId: string, user: RequestUser) => Promise<{
        id: string;
        status: ScheduleStatus;
        isDeleted: boolean;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        doctorId: string;
        startDateTime: Date;
        endDateTime: Date;
        totalSlots: number;
        availableSlots: number;
        meetingLink: string;
    }>;
    getTodaysSchedules: (query: IQuery) => Promise<{
        data: {
            id: string;
            status: ScheduleStatus;
            isDeleted: boolean;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            doctorId: string;
            startDateTime: Date;
            endDateTime: Date;
            totalSlots: number;
            availableSlots: number;
            meetingLink: string;
        }[];
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>;
};
//# sourceMappingURL=schedule.service.d.ts.map