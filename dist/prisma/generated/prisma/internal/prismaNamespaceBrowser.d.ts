import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client/runtime/client").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client/runtime/client").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client/runtime/client").AnyNullClass;
export declare const ModelName: {
    readonly Apppointment: "Apppointment";
    readonly Doctor: "Doctor";
    readonly Patient: "Patient";
    readonly Payment: "Payment";
    readonly Schedule: "Schedule";
    readonly User: "User";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const ApppointmentScalarFieldEnum: {
    readonly id: "id";
    readonly status: "status";
    readonly joiningTime: "joiningTime";
    readonly serialNumber: "serialNumber";
    readonly recordUrl: "recordUrl";
    readonly recordPublicId: "recordPublicId";
    readonly prescriptionUrl: "prescriptionUrl";
    readonly prescriptionPublicId: "prescriptionPublicId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly patientId: "patientId";
    readonly doctorId: "doctorId";
    readonly scheduleId: "scheduleId";
};
export type ApppointmentScalarFieldEnum = (typeof ApppointmentScalarFieldEnum)[keyof typeof ApppointmentScalarFieldEnum];
export declare const DoctorScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly address: "address";
    readonly specialization: "specialization";
    readonly licenseNumber: "licenseNumber";
    readonly qualifications: "qualifications";
    readonly experienceYears: "experienceYears";
    readonly bio: "bio";
    readonly consultationFee: "consultationFee";
    readonly contactNumber: "contactNumber";
    readonly verificationStatus: "verificationStatus";
    readonly rejectionReason: "rejectionReason";
    readonly reviewedBy: "reviewedBy";
    readonly reviewedAt: "reviewedAt";
    readonly resume: "resume";
    readonly resumePublicId: "resumePublicId";
    readonly additionalFiles: "additionalFiles";
    readonly isDeleted: "isDeleted";
    readonly deletedAt: "deletedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly userId: "userId";
};
export type DoctorScalarFieldEnum = (typeof DoctorScalarFieldEnum)[keyof typeof DoctorScalarFieldEnum];
export declare const PatientScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly contactNumber: "contactNumber";
    readonly address: "address";
    readonly isDeleted: "isDeleted";
    readonly deletedAt: "deletedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly userId: "userId";
};
export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum];
export declare const PaymentScalarFieldEnum: {
    readonly id: "id";
    readonly status: "status";
    readonly amount: "amount";
    readonly currency: "currency";
    readonly paymentGateway: "paymentGateway";
    readonly merchantInvoiceNumber: "merchantInvoiceNumber";
    readonly bkashPaymentId: "bkashPaymentId";
    readonly bkashTrxId: "bkashTrxId";
    readonly payerReference: "payerReference";
    readonly paidAt: "paidAt";
    readonly gatewayResponse: "gatewayResponse";
    readonly refundTrxId: "refundTrxId";
    readonly refundAmount: "refundAmount";
    readonly refundReason: "refundReason";
    readonly refundedAt: "refundedAt";
    readonly appointmentId: "appointmentId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum];
export declare const ScheduleScalarFieldEnum: {
    readonly id: "id";
    readonly startDateTime: "startDateTime";
    readonly endDateTime: "endDateTime";
    readonly totalSlots: "totalSlots";
    readonly availableSlots: "availableSlots";
    readonly meetingLink: "meetingLink";
    readonly status: "status";
    readonly isDeleted: "isDeleted";
    readonly deletedAt: "deletedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly doctorId: "doctorId";
};
export type ScheduleScalarFieldEnum = (typeof ScheduleScalarFieldEnum)[keyof typeof ScheduleScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly password: "password";
    readonly googleId: "googleId";
    readonly authProvider: "authProvider";
    readonly emailVerified: "emailVerified";
    readonly role: "role";
    readonly status: "status";
    readonly needPasswordChange: "needPasswordChange";
    readonly imageUrl: "imageUrl";
    readonly imagePublicId: "imagePublicId";
    readonly isDeleted: "isDeleted";
    readonly deletedAt: "deletedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: import("@prisma/client/runtime/client").DbNullClass;
    readonly JsonNull: import("@prisma/client/runtime/client").JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client/runtime/client").DbNullClass;
    readonly JsonNull: import("@prisma/client/runtime/client").JsonNullClass;
    readonly AnyNull: import("@prisma/client/runtime/client").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map