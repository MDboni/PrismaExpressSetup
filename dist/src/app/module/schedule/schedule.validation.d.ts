import { z } from "zod";
export declare const CreateScheduleValidationZodSchema: z.ZodObject<{
    startDateTime: z.ZodCoercedDate<unknown>;
    endDateTime: z.ZodCoercedDate<unknown>;
    meetingLink: z.ZodURL;
}, z.core.$strip>;
export declare const UpdateScheduleValidationZodSchema: z.ZodObject<{
    startDateTime: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    endDateTime: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    meetingLink: z.ZodOptional<z.ZodURL>;
}, z.core.$strip>;
//# sourceMappingURL=schedule.validation.d.ts.map