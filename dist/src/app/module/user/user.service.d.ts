export declare const UserServices: {
    uploadProfileImage: (buffer: Buffer, userId: string) => Promise<{
        email: string;
        name: string;
        role: import("../../../../prisma/generated/prisma/enums").Role;
        id: string;
        googleId: string | null;
        authProvider: import("../../../../prisma/generated/prisma/enums").AuthProvider;
        emailVerified: boolean;
        status: import("../../../../prisma/generated/prisma/enums").UserStatus;
        needPasswordChange: boolean;
        imageUrl: string;
        imagePublicId: string;
        isDeleted: boolean;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
};
//# sourceMappingURL=user.service.d.ts.map