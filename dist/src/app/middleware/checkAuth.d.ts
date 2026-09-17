import type { NextFunction, Request, Response } from "express";
import type { Role } from "../../../prisma/generated/prisma/enums";
export type RequestUser = {
    email: string;
    name: string;
    userId: string;
    role: Role;
};
declare global {
    namespace Express {
        interface Request {
            user?: RequestUser;
        }
    }
}
export declare const auth: (...requiredRoles: Role[]) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=checkAuth.d.ts.map