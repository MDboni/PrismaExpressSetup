import { AppointmentStatus } from "../../../../prisma/generated/prisma/enums";
import { RequestUser } from "../../middleware/checkAuth";
import { ICreatePrescriptionPayload } from "./prescription.interface";
export declare const PrescriptionServices: {
    createPrescription: (payload: ICreatePrescriptionPayload, user: RequestUser) => Promise<{
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
    getSinglePrescription: (appointmentId: string, user: RequestUser) => Promise<{
        appointment: {
            patient: {
                name: string;
                userId: string;
                id: string;
            };
            doctor: {
                name: string;
                userId: string;
                id: string;
            };
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
        };
        prescription: string;
    }>;
};
//# sourceMappingURL=prescription.service.d.ts.map