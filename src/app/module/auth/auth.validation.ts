import { z } from "zod";

export const PatientRegistration = z.object({
	name: z.string().min(2).max(100),
	email: z.email(),
	password: z
		.string()
		.min(6)
		.max(100)
		.regex(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
			"Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
		),
	patient: z.object({
		contactNumber: z.string().optional(),
		age: z.number().min(0),
	}),
});
