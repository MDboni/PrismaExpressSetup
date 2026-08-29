import { z } from "zod";

const PatientRegistrationZodSchema = z.object({
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

const LoginZodSchema = z.object({
	email: z.email(),
	password: z
		.string()
		.min(8, "Password Must Minimum 8 Characters Long.")
		.regex(/[a-z]/, "Password must contain atleast 1 Lowercase Letter")
		.regex(/[A-Z]/, "Password must contain atleast 1 Uppercase Letter")

		.regex(/[0-9]/, "Password must contain atleast 1 Number")
		.regex(/[^A-Za-z0-9]/, "Password must contain atleast 1 Special Character"),
});

export const userValidation = {
	PatientRegistrationZodSchema,
	LoginZodSchema,
};
