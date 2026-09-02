import { Router } from "express";
import { upload } from "../../lib/multer";
import { auth } from "../../middleware/checkAuth";
import { UserController } from "./user.controller";
import { Role } from "../../../../prisma/generated/prisma/client";

const router = Router();

router.patch(
	"/profile-image",
	auth(Role.SUPER_ADMIN, Role.ADMIN, Role.DOCTOR, Role.PATIENT),
	upload.single("profileImage"),
	UserController.uploadProfileImage,
);

export const UserRoutes = router;
