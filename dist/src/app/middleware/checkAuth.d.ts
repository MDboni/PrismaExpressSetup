import type { NextFunction, Request, Response } from "express";
import { Role } from "../../../prisma/generated/prisma/enums";
declare global {
    namespace Express {
        interface Request {
            user?: {
                email: string;
                name: string;
                userId: string;
                role: Role;
            };
        }
    }
}
export declare const auth: (...requiredRoles: Role[]) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=checkAuth.d.ts.map