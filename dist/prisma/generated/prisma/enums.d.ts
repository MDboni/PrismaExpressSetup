export declare const Role: {
    readonly SUPER_ADMIN: "SUPER_ADMIN";
    readonly ADMIN: "ADMIN";
    readonly DOCTOR: "DOCTOR";
    readonly PATIENT: "PATIENT";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const UserStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly BLOCKED: "BLOCKED";
    readonly DELETED: "DELETED";
};
export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];
export declare const Gender: {
    readonly MALE: "MALE";
    readonly FEMALE: "FEMALE";
    readonly OTHER: "OTHER";
};
export type Gender = (typeof Gender)[keyof typeof Gender];
export declare const AuthProvider: {
    readonly GOOGLE: "GOOGLE";
    readonly CREDENTIAL: "CREDENTIAL";
};
export type AuthProvider = (typeof AuthProvider)[keyof typeof AuthProvider];
//# sourceMappingURL=enums.d.ts.map