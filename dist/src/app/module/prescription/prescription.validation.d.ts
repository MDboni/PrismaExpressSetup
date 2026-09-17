import { z } from "zod";
export declare const CreatePrescriptionValidationZodSchema: z.ZodObject<{
    appointmentId: z.ZodString;
    findings: z.ZodString;
    medicines: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        dosage: z.ZodString;
        duration: z.ZodString;
        instructions: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
//# sourceMappingURL=prescription.validation.d.ts.map