import { AuthProvider, Role, UserStatus } from "../../../../prisma/generated/prisma/enums";
import type { IGoogleLoginPayload, ILoginUserPayload, IRegisterPatientPayload, IRequestUser } from "./auth.interface";
export declare const AuthService: {
    registerPatient: (payload: IRegisterPatientPayload) => Promise<{
        user: {
            email: string;
            name: string;
            role: Role;
            id: string;
            googleId: string | null;
            authProvider: AuthProvider;
            emailVerified: boolean;
            status: UserStatus;
            needPasswordChange: boolean;
            isDeleted: boolean;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
        };
        patient: {
            email: string;
            name: string;
            userId: string;
            id: string;
            isDeleted: boolean;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            contactNumber: string | null;
            address: string | null;
        } | null;
        accessToken: string;
        refreshToken: string;
    }>;
    loginUser: (payload: ILoginUserPayload) => Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    getMe: (user: IRequestUser) => Promise<{
        patient: {
            email: string;
            name: string;
            userId: string;
            id: string;
            isDeleted: boolean;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            contactNumber: string | null;
            address: string | null;
        } | null;
    } & {
        email: string;
        name: string;
        role: Role;
        id: string;
        googleId: string | null;
        authProvider: AuthProvider;
        emailVerified: boolean;
        status: UserStatus;
        needPasswordChange: boolean;
        isDeleted: boolean;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    refreshToken: (token: string) => Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    googleLogin: (payload: IGoogleLoginPayload) => Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
};
//# sourceMappingURL=auth.service.d.ts.map