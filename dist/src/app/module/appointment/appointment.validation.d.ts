import z from "zod";
export declare const BookAppointmentValidationZodSchema: z.ZodObject<{
    scheduleId: z.ZodString;
}, z.core.$strip>;
export declare const UpdateAppointmentStatusValidationZodSchema: z.ZodObject<{
    status: z.ZodEnum<{
        ONGOING: "ONGOING";
        COMPLETED: "COMPLETED";
    }>;
}, z.core.$strip>;
//# sourceMappingURL=appointment.validation.d.ts.map