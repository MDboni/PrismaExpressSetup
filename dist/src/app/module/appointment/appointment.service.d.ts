import { AppointmentStatus, PaymentStatus, ScheduleStatus } from "../../../../prisma/generated/prisma/enums";
import { IQuery } from "../../interfaces";
import type { RequestUser } from "../../middleware/checkAuth";
import { IBookAppointmentPayload, ICancelAppointmentPayload, IPayAppointmentPayload, IUpdateAppointmentStatusPayload } from "./appointment.interface";
export declare const AppointmentServices: {
    bookAppointment: (payload: IBookAppointmentPayload, user: RequestUser) => Promise<{
        paymentUrl: any;
    }>;
    payAppointment: (payload: IPayAppointmentPayload, user: RequestUser) => Promise<{
        paymentUrl: any;
    }>;
    bookAppointmentCallback: (query: Record<string, any>) => Promise<{
        redirectUrl: string;
        executedPaymentResult?: undefined;
    } | {
        executedPaymentResult: any;
        redirectUrl: string;
    }>;
    cancelAppointment: (payload: ICancelAppointmentPayload, user: RequestUser) => Promise<{
        appointment: {
            id: string;
            status: AppointmentStatus;
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
        };
        payment: {
            id: string;
            status: PaymentStatus;
            createdAt: Date;
            updatedAt: Date;
            amount: import("@prisma/client/runtime/index-browser").Decimal;
            refundAmount: import("@prisma/client/runtime/index-browser").Decimal | null;
            merchantInvoiceNumber: string;
            bkashPaymentId: string | null;
            appointmentId: string;
            currency: string;
            paymentGateway: string;
            bkashTrxId: string | null;
            payerReference: string | null;
            paidAt: string | null;
            gatewayResponse: import("@prisma/client/runtime/client").JsonValue | null;
            refundTrxId: string | null;
            refundReason: string | null;
            refundedAt: string | null;
        } | null;
    }>;
    updateAppointmentStatus: (appointmentId: string, payload: IUpdateAppointmentStatusPayload, user: RequestUser) => Promise<{
        id: string;
        status: AppointmentStatus;
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
    } | null>;
    getMyAppointments: (query: IQuery, user: RequestUser) => Promise<{
        data: ({
            doctor: {
                name: string;
                id: string;
                specialization: string;
            };
            schedule: {
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
            };
            payment: {
                id: string;
                status: PaymentStatus;
                createdAt: Date;
                updatedAt: Date;
                amount: import("@prisma/client/runtime/index-browser").Decimal;
                refundAmount: import("@prisma/client/runtime/index-browser").Decimal | null;
                merchantInvoiceNumber: string;
                bkashPaymentId: string | null;
                appointmentId: string;
                currency: string;
                paymentGateway: string;
                bkashTrxId: string | null;
                payerReference: string | null;
                paidAt: string | null;
                gatewayResponse: import("@prisma/client/runtime/client").JsonValue | null;
                refundTrxId: string | null;
                refundReason: string | null;
                refundedAt: string | null;
            } | null;
        } & {
            id: string;
            status: AppointmentStatus;
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
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>;
    getDoctorAppointments: (query: IQuery, user: RequestUser) => Promise<{
        data: ({
            patient: {
                email: string;
                name: string;
                id: string;
                contactNumber: string | null;
            };
            schedule: {
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
            };
            payment: {
                id: string;
                status: PaymentStatus;
                createdAt: Date;
                updatedAt: Date;
                amount: import("@prisma/client/runtime/index-browser").Decimal;
                refundAmount: import("@prisma/client/runtime/index-browser").Decimal | null;
                merchantInvoiceNumber: string;
                bkashPaymentId: string | null;
                appointmentId: string;
                currency: string;
                paymentGateway: string;
                bkashTrxId: string | null;
                payerReference: string | null;
                paidAt: string | null;
                gatewayResponse: import("@prisma/client/runtime/client").JsonValue | null;
                refundTrxId: string | null;
                refundReason: string | null;
                refundedAt: string | null;
            } | null;
        } & {
            id: string;
            status: AppointmentStatus;
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
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>;
    getAllAppointments: (query: IQuery) => Promise<{
        data: ({
            patient: {
                email: string;
                name: string;
                id: string;
            };
            doctor: {
                name: string;
                id: string;
                specialization: string;
            };
            schedule: {
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
            };
            payment: {
                id: string;
                status: PaymentStatus;
                createdAt: Date;
                updatedAt: Date;
                amount: import("@prisma/client/runtime/index-browser").Decimal;
                refundAmount: import("@prisma/client/runtime/index-browser").Decimal | null;
                merchantInvoiceNumber: string;
                bkashPaymentId: string | null;
                appointmentId: string;
                currency: string;
                paymentGateway: string;
                bkashTrxId: string | null;
                payerReference: string | null;
                paidAt: string | null;
                gatewayResponse: import("@prisma/client/runtime/client").JsonValue | null;
                refundTrxId: string | null;
                refundReason: string | null;
                refundedAt: string | null;
            } | null;
        } & {
            id: string;
            status: AppointmentStatus;
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
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>;
    getSingleAppointment: (appointmentId: string, user: RequestUser) => Promise<{
        patient: {
            email: string;
            name: string;
            userId: string;
            id: string;
        };
        doctor: {
            name: string;
            userId: string;
            id: string;
            specialization: string;
        };
        schedule: {
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
        };
        payment: {
            id: string;
            status: PaymentStatus;
            createdAt: Date;
            updatedAt: Date;
            amount: import("@prisma/client/runtime/index-browser").Decimal;
            refundAmount: import("@prisma/client/runtime/index-browser").Decimal | null;
            merchantInvoiceNumber: string;
            bkashPaymentId: string | null;
            appointmentId: string;
            currency: string;
            paymentGateway: string;
            bkashTrxId: string | null;
            payerReference: string | null;
            paidAt: string | null;
            gatewayResponse: import("@prisma/client/runtime/client").JsonValue | null;
            refundTrxId: string | null;
            refundReason: string | null;
            refundedAt: string | null;
        } | null;
    } & {
        id: string;
        status: AppointmentStatus;
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
    }>;
};
//# sourceMappingURL=appointment.service.d.ts.map