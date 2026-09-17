import { IQuery } from "../../interfaces";
import { RequestUser } from "../../middleware/checkAuth";
export declare const PaymentServices: {
    getAllPayments: (query: IQuery) => Promise<{
        data: ({
            appointment: {
                doctor: {
                    name: string;
                    id: string;
                    specialization: string;
                };
                schedule: {
                    id: string;
                    status: import("../../../../prisma/generated/prisma/enums").ScheduleStatus;
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
            };
        } & {
            id: string;
            status: import("../../../../prisma/generated/prisma/enums").PaymentStatus;
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
        })[];
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>;
    getMyPayments: (query: IQuery, user: RequestUser) => Promise<{
        data: ({
            appointment: {
                doctor: {
                    name: string;
                    id: string;
                    specialization: string;
                };
                schedule: {
                    id: string;
                    status: import("../../../../prisma/generated/prisma/enums").ScheduleStatus;
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
            };
        } & {
            id: string;
            status: import("../../../../prisma/generated/prisma/enums").PaymentStatus;
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
        })[];
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>;
    getSinglePayment: (paymentId: string, user: RequestUser) => Promise<{
        appointment: {
            patient: {
                email: string;
                name: string;
                userId: string;
                id: string;
            };
            doctor: {
                name: string;
                id: string;
                specialization: string;
            };
            schedule: {
                id: string;
                status: import("../../../../prisma/generated/prisma/enums").ScheduleStatus;
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
        };
    } & {
        id: string;
        status: import("../../../../prisma/generated/prisma/enums").PaymentStatus;
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
    }>;
};
//# sourceMappingURL=payment.service.d.ts.map