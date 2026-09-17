import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Apppointment
 *
 */
export type ApppointmentModel = runtime.Types.Result.DefaultSelection<Prisma.$ApppointmentPayload>;
export type AggregateApppointment = {
    _count: ApppointmentCountAggregateOutputType | null;
    _avg: ApppointmentAvgAggregateOutputType | null;
    _sum: ApppointmentSumAggregateOutputType | null;
    _min: ApppointmentMinAggregateOutputType | null;
    _max: ApppointmentMaxAggregateOutputType | null;
};
export type ApppointmentAvgAggregateOutputType = {
    serialNumber: number | null;
};
export type ApppointmentSumAggregateOutputType = {
    serialNumber: number | null;
};
export type ApppointmentMinAggregateOutputType = {
    id: string | null;
    status: $Enums.AppointmentStatus | null;
    joiningTime: Date | null;
    serialNumber: number | null;
    recordUrl: string | null;
    recordPublicId: string | null;
    prescriptionUrl: string | null;
    prescriptionPublicId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    patientId: string | null;
    doctorId: string | null;
    scheduleId: string | null;
};
export type ApppointmentMaxAggregateOutputType = {
    id: string | null;
    status: $Enums.AppointmentStatus | null;
    joiningTime: Date | null;
    serialNumber: number | null;
    recordUrl: string | null;
    recordPublicId: string | null;
    prescriptionUrl: string | null;
    prescriptionPublicId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    patientId: string | null;
    doctorId: string | null;
    scheduleId: string | null;
};
export type ApppointmentCountAggregateOutputType = {
    id: number;
    status: number;
    joiningTime: number;
    serialNumber: number;
    recordUrl: number;
    recordPublicId: number;
    prescriptionUrl: number;
    prescriptionPublicId: number;
    createdAt: number;
    updatedAt: number;
    patientId: number;
    doctorId: number;
    scheduleId: number;
    _all: number;
};
export type ApppointmentAvgAggregateInputType = {
    serialNumber?: true;
};
export type ApppointmentSumAggregateInputType = {
    serialNumber?: true;
};
export type ApppointmentMinAggregateInputType = {
    id?: true;
    status?: true;
    joiningTime?: true;
    serialNumber?: true;
    recordUrl?: true;
    recordPublicId?: true;
    prescriptionUrl?: true;
    prescriptionPublicId?: true;
    createdAt?: true;
    updatedAt?: true;
    patientId?: true;
    doctorId?: true;
    scheduleId?: true;
};
export type ApppointmentMaxAggregateInputType = {
    id?: true;
    status?: true;
    joiningTime?: true;
    serialNumber?: true;
    recordUrl?: true;
    recordPublicId?: true;
    prescriptionUrl?: true;
    prescriptionPublicId?: true;
    createdAt?: true;
    updatedAt?: true;
    patientId?: true;
    doctorId?: true;
    scheduleId?: true;
};
export type ApppointmentCountAggregateInputType = {
    id?: true;
    status?: true;
    joiningTime?: true;
    serialNumber?: true;
    recordUrl?: true;
    recordPublicId?: true;
    prescriptionUrl?: true;
    prescriptionPublicId?: true;
    createdAt?: true;
    updatedAt?: true;
    patientId?: true;
    doctorId?: true;
    scheduleId?: true;
    _all?: true;
};
export type ApppointmentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Apppointment to aggregate.
     */
    where?: Prisma.ApppointmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Apppointments to fetch.
     */
    orderBy?: Prisma.ApppointmentOrderByWithRelationInput | Prisma.ApppointmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ApppointmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Apppointments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Apppointments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Apppointments
    **/
    _count?: true | ApppointmentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ApppointmentAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ApppointmentSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ApppointmentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ApppointmentMaxAggregateInputType;
};
export type GetApppointmentAggregateType<T extends ApppointmentAggregateArgs> = {
    [P in keyof T & keyof AggregateApppointment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateApppointment[P]> : Prisma.GetScalarType<T[P], AggregateApppointment[P]>;
};
export type ApppointmentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApppointmentWhereInput;
    orderBy?: Prisma.ApppointmentOrderByWithAggregationInput | Prisma.ApppointmentOrderByWithAggregationInput[];
    by: Prisma.ApppointmentScalarFieldEnum[] | Prisma.ApppointmentScalarFieldEnum;
    having?: Prisma.ApppointmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ApppointmentCountAggregateInputType | true;
    _avg?: ApppointmentAvgAggregateInputType;
    _sum?: ApppointmentSumAggregateInputType;
    _min?: ApppointmentMinAggregateInputType;
    _max?: ApppointmentMaxAggregateInputType;
};
export type ApppointmentGroupByOutputType = {
    id: string;
    status: $Enums.AppointmentStatus;
    joiningTime: Date | null;
    serialNumber: number | null;
    recordUrl: string | null;
    recordPublicId: string | null;
    prescriptionUrl: string | null;
    prescriptionPublicId: string | null;
    createdAt: Date;
    updatedAt: Date;
    patientId: string;
    doctorId: string;
    scheduleId: string;
    _count: ApppointmentCountAggregateOutputType | null;
    _avg: ApppointmentAvgAggregateOutputType | null;
    _sum: ApppointmentSumAggregateOutputType | null;
    _min: ApppointmentMinAggregateOutputType | null;
    _max: ApppointmentMaxAggregateOutputType | null;
};
export type GetApppointmentGroupByPayload<T extends ApppointmentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ApppointmentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ApppointmentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ApppointmentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ApppointmentGroupByOutputType[P]>;
}>>;
export type ApppointmentWhereInput = {
    AND?: Prisma.ApppointmentWhereInput | Prisma.ApppointmentWhereInput[];
    OR?: Prisma.ApppointmentWhereInput[];
    NOT?: Prisma.ApppointmentWhereInput | Prisma.ApppointmentWhereInput[];
    id?: Prisma.StringFilter<"Apppointment"> | string;
    status?: Prisma.EnumAppointmentStatusFilter<"Apppointment"> | $Enums.AppointmentStatus;
    joiningTime?: Prisma.DateTimeNullableFilter<"Apppointment"> | Date | string | null;
    serialNumber?: Prisma.IntNullableFilter<"Apppointment"> | number | null;
    recordUrl?: Prisma.StringNullableFilter<"Apppointment"> | string | null;
    recordPublicId?: Prisma.StringNullableFilter<"Apppointment"> | string | null;
    prescriptionUrl?: Prisma.StringNullableFilter<"Apppointment"> | string | null;
    prescriptionPublicId?: Prisma.StringNullableFilter<"Apppointment"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Apppointment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Apppointment"> | Date | string;
    patientId?: Prisma.StringFilter<"Apppointment"> | string;
    doctorId?: Prisma.StringFilter<"Apppointment"> | string;
    scheduleId?: Prisma.StringFilter<"Apppointment"> | string;
    patient?: Prisma.XOR<Prisma.PatientScalarRelationFilter, Prisma.PatientWhereInput>;
    doctor?: Prisma.XOR<Prisma.DoctorScalarRelationFilter, Prisma.DoctorWhereInput>;
    schedule?: Prisma.XOR<Prisma.ScheduleScalarRelationFilter, Prisma.ScheduleWhereInput>;
    payment?: Prisma.XOR<Prisma.PaymentNullableScalarRelationFilter, Prisma.PaymentWhereInput> | null;
};
export type ApppointmentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    joiningTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    serialNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    recordUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    recordPublicId?: Prisma.SortOrderInput | Prisma.SortOrder;
    prescriptionUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    prescriptionPublicId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    scheduleId?: Prisma.SortOrder;
    patient?: Prisma.PatientOrderByWithRelationInput;
    doctor?: Prisma.DoctorOrderByWithRelationInput;
    schedule?: Prisma.ScheduleOrderByWithRelationInput;
    payment?: Prisma.PaymentOrderByWithRelationInput;
};
export type ApppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    unique_appointment?: Prisma.ApppointmentUnique_appointmentCompoundUniqueInput;
    unique_appointment_serial_number?: Prisma.ApppointmentUnique_appointment_serial_numberCompoundUniqueInput;
    AND?: Prisma.ApppointmentWhereInput | Prisma.ApppointmentWhereInput[];
    OR?: Prisma.ApppointmentWhereInput[];
    NOT?: Prisma.ApppointmentWhereInput | Prisma.ApppointmentWhereInput[];
    status?: Prisma.EnumAppointmentStatusFilter<"Apppointment"> | $Enums.AppointmentStatus;
    joiningTime?: Prisma.DateTimeNullableFilter<"Apppointment"> | Date | string | null;
    serialNumber?: Prisma.IntNullableFilter<"Apppointment"> | number | null;
    recordUrl?: Prisma.StringNullableFilter<"Apppointment"> | string | null;
    recordPublicId?: Prisma.StringNullableFilter<"Apppointment"> | string | null;
    prescriptionUrl?: Prisma.StringNullableFilter<"Apppointment"> | string | null;
    prescriptionPublicId?: Prisma.StringNullableFilter<"Apppointment"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Apppointment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Apppointment"> | Date | string;
    patientId?: Prisma.StringFilter<"Apppointment"> | string;
    doctorId?: Prisma.StringFilter<"Apppointment"> | string;
    scheduleId?: Prisma.StringFilter<"Apppointment"> | string;
    patient?: Prisma.XOR<Prisma.PatientScalarRelationFilter, Prisma.PatientWhereInput>;
    doctor?: Prisma.XOR<Prisma.DoctorScalarRelationFilter, Prisma.DoctorWhereInput>;
    schedule?: Prisma.XOR<Prisma.ScheduleScalarRelationFilter, Prisma.ScheduleWhereInput>;
    payment?: Prisma.XOR<Prisma.PaymentNullableScalarRelationFilter, Prisma.PaymentWhereInput> | null;
}, "id" | "unique_appointment" | "unique_appointment_serial_number">;
export type ApppointmentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    joiningTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    serialNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    recordUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    recordPublicId?: Prisma.SortOrderInput | Prisma.SortOrder;
    prescriptionUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    prescriptionPublicId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    scheduleId?: Prisma.SortOrder;
    _count?: Prisma.ApppointmentCountOrderByAggregateInput;
    _avg?: Prisma.ApppointmentAvgOrderByAggregateInput;
    _max?: Prisma.ApppointmentMaxOrderByAggregateInput;
    _min?: Prisma.ApppointmentMinOrderByAggregateInput;
    _sum?: Prisma.ApppointmentSumOrderByAggregateInput;
};
export type ApppointmentScalarWhereWithAggregatesInput = {
    AND?: Prisma.ApppointmentScalarWhereWithAggregatesInput | Prisma.ApppointmentScalarWhereWithAggregatesInput[];
    OR?: Prisma.ApppointmentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ApppointmentScalarWhereWithAggregatesInput | Prisma.ApppointmentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Apppointment"> | string;
    status?: Prisma.EnumAppointmentStatusWithAggregatesFilter<"Apppointment"> | $Enums.AppointmentStatus;
    joiningTime?: Prisma.DateTimeNullableWithAggregatesFilter<"Apppointment"> | Date | string | null;
    serialNumber?: Prisma.IntNullableWithAggregatesFilter<"Apppointment"> | number | null;
    recordUrl?: Prisma.StringNullableWithAggregatesFilter<"Apppointment"> | string | null;
    recordPublicId?: Prisma.StringNullableWithAggregatesFilter<"Apppointment"> | string | null;
    prescriptionUrl?: Prisma.StringNullableWithAggregatesFilter<"Apppointment"> | string | null;
    prescriptionPublicId?: Prisma.StringNullableWithAggregatesFilter<"Apppointment"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Apppointment"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Apppointment"> | Date | string;
    patientId?: Prisma.StringWithAggregatesFilter<"Apppointment"> | string;
    doctorId?: Prisma.StringWithAggregatesFilter<"Apppointment"> | string;
    scheduleId?: Prisma.StringWithAggregatesFilter<"Apppointment"> | string;
};
export type ApppointmentCreateInput = {
    id?: string;
    status?: $Enums.AppointmentStatus;
    joiningTime?: Date | string | null;
    serialNumber?: number | null;
    recordUrl?: string | null;
    recordPublicId?: string | null;
    prescriptionUrl?: string | null;
    prescriptionPublicId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    patient: Prisma.PatientCreateNestedOneWithoutAppointmentsInput;
    doctor: Prisma.DoctorCreateNestedOneWithoutAppointmentsInput;
    schedule: Prisma.ScheduleCreateNestedOneWithoutAppointmentsInput;
    payment?: Prisma.PaymentCreateNestedOneWithoutAppointmentInput;
};
export type ApppointmentUncheckedCreateInput = {
    id?: string;
    status?: $Enums.AppointmentStatus;
    joiningTime?: Date | string | null;
    serialNumber?: number | null;
    recordUrl?: string | null;
    recordPublicId?: string | null;
    prescriptionUrl?: string | null;
    prescriptionPublicId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    patientId: string;
    doctorId: string;
    scheduleId: string;
    payment?: Prisma.PaymentUncheckedCreateNestedOneWithoutAppointmentInput;
};
export type ApppointmentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    joiningTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    serialNumber?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    recordUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordPublicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prescriptionUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prescriptionPublicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patient?: Prisma.PatientUpdateOneRequiredWithoutAppointmentsNestedInput;
    doctor?: Prisma.DoctorUpdateOneRequiredWithoutAppointmentsNestedInput;
    schedule?: Prisma.ScheduleUpdateOneRequiredWithoutAppointmentsNestedInput;
    payment?: Prisma.PaymentUpdateOneWithoutAppointmentNestedInput;
};
export type ApppointmentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    joiningTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    serialNumber?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    recordUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordPublicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prescriptionUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prescriptionPublicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patientId?: Prisma.StringFieldUpdateOperationsInput | string;
    doctorId?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduleId?: Prisma.StringFieldUpdateOperationsInput | string;
    payment?: Prisma.PaymentUncheckedUpdateOneWithoutAppointmentNestedInput;
};
export type ApppointmentCreateManyInput = {
    id?: string;
    status?: $Enums.AppointmentStatus;
    joiningTime?: Date | string | null;
    serialNumber?: number | null;
    recordUrl?: string | null;
    recordPublicId?: string | null;
    prescriptionUrl?: string | null;
    prescriptionPublicId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    patientId: string;
    doctorId: string;
    scheduleId: string;
};
export type ApppointmentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    joiningTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    serialNumber?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    recordUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordPublicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prescriptionUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prescriptionPublicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApppointmentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    joiningTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    serialNumber?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    recordUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordPublicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prescriptionUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prescriptionPublicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patientId?: Prisma.StringFieldUpdateOperationsInput | string;
    doctorId?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduleId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ApppointmentUnique_appointmentCompoundUniqueInput = {
    patientId: string;
    doctorId: string;
    scheduleId: string;
};
export type ApppointmentUnique_appointment_serial_numberCompoundUniqueInput = {
    scheduleId: string;
    serialNumber: number;
    joiningTime: Date | string;
};
export type ApppointmentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    joiningTime?: Prisma.SortOrder;
    serialNumber?: Prisma.SortOrder;
    recordUrl?: Prisma.SortOrder;
    recordPublicId?: Prisma.SortOrder;
    prescriptionUrl?: Prisma.SortOrder;
    prescriptionPublicId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    scheduleId?: Prisma.SortOrder;
};
export type ApppointmentAvgOrderByAggregateInput = {
    serialNumber?: Prisma.SortOrder;
};
export type ApppointmentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    joiningTime?: Prisma.SortOrder;
    serialNumber?: Prisma.SortOrder;
    recordUrl?: Prisma.SortOrder;
    recordPublicId?: Prisma.SortOrder;
    prescriptionUrl?: Prisma.SortOrder;
    prescriptionPublicId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    scheduleId?: Prisma.SortOrder;
};
export type ApppointmentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    joiningTime?: Prisma.SortOrder;
    serialNumber?: Prisma.SortOrder;
    recordUrl?: Prisma.SortOrder;
    recordPublicId?: Prisma.SortOrder;
    prescriptionUrl?: Prisma.SortOrder;
    prescriptionPublicId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    doctorId?: Prisma.SortOrder;
    scheduleId?: Prisma.SortOrder;
};
export type ApppointmentSumOrderByAggregateInput = {
    serialNumber?: Prisma.SortOrder;
};
export type ApppointmentListRelationFilter = {
    every?: Prisma.ApppointmentWhereInput;
    some?: Prisma.ApppointmentWhereInput;
    none?: Prisma.ApppointmentWhereInput;
};
export type ApppointmentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ApppointmentScalarRelationFilter = {
    is?: Prisma.ApppointmentWhereInput;
    isNot?: Prisma.ApppointmentWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type EnumAppointmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.AppointmentStatus;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type ApppointmentCreateNestedManyWithoutDoctorInput = {
    create?: Prisma.XOR<Prisma.ApppointmentCreateWithoutDoctorInput, Prisma.ApppointmentUncheckedCreateWithoutDoctorInput> | Prisma.ApppointmentCreateWithoutDoctorInput[] | Prisma.ApppointmentUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?: Prisma.ApppointmentCreateOrConnectWithoutDoctorInput | Prisma.ApppointmentCreateOrConnectWithoutDoctorInput[];
    createMany?: Prisma.ApppointmentCreateManyDoctorInputEnvelope;
    connect?: Prisma.ApppointmentWhereUniqueInput | Prisma.ApppointmentWhereUniqueInput[];
};
export type ApppointmentUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: Prisma.XOR<Prisma.ApppointmentCreateWithoutDoctorInput, Prisma.ApppointmentUncheckedCreateWithoutDoctorInput> | Prisma.ApppointmentCreateWithoutDoctorInput[] | Prisma.ApppointmentUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?: Prisma.ApppointmentCreateOrConnectWithoutDoctorInput | Prisma.ApppointmentCreateOrConnectWithoutDoctorInput[];
    createMany?: Prisma.ApppointmentCreateManyDoctorInputEnvelope;
    connect?: Prisma.ApppointmentWhereUniqueInput | Prisma.ApppointmentWhereUniqueInput[];
};
export type ApppointmentUpdateManyWithoutDoctorNestedInput = {
    create?: Prisma.XOR<Prisma.ApppointmentCreateWithoutDoctorInput, Prisma.ApppointmentUncheckedCreateWithoutDoctorInput> | Prisma.ApppointmentCreateWithoutDoctorInput[] | Prisma.ApppointmentUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?: Prisma.ApppointmentCreateOrConnectWithoutDoctorInput | Prisma.ApppointmentCreateOrConnectWithoutDoctorInput[];
    upsert?: Prisma.ApppointmentUpsertWithWhereUniqueWithoutDoctorInput | Prisma.ApppointmentUpsertWithWhereUniqueWithoutDoctorInput[];
    createMany?: Prisma.ApppointmentCreateManyDoctorInputEnvelope;
    set?: Prisma.ApppointmentWhereUniqueInput | Prisma.ApppointmentWhereUniqueInput[];
    disconnect?: Prisma.ApppointmentWhereUniqueInput | Prisma.ApppointmentWhereUniqueInput[];
    delete?: Prisma.ApppointmentWhereUniqueInput | Prisma.ApppointmentWhereUniqueInput[];
    connect?: Prisma.ApppointmentWhereUniqueInput | Prisma.ApppointmentWhereUniqueInput[];
    update?: Prisma.ApppointmentUpdateWithWhereUniqueWithoutDoctorInput | Prisma.ApppointmentUpdateWithWhereUniqueWithoutDoctorInput[];
    updateMany?: Prisma.ApppointmentUpdateManyWithWhereWithoutDoctorInput | Prisma.ApppointmentUpdateManyWithWhereWithoutDoctorInput[];
    deleteMany?: Prisma.ApppointmentScalarWhereInput | Prisma.ApppointmentScalarWhereInput[];
};
export type ApppointmentUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: Prisma.XOR<Prisma.ApppointmentCreateWithoutDoctorInput, Prisma.ApppointmentUncheckedCreateWithoutDoctorInput> | Prisma.ApppointmentCreateWithoutDoctorInput[] | Prisma.ApppointmentUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?: Prisma.ApppointmentCreateOrConnectWithoutDoctorInput | Prisma.ApppointmentCreateOrConnectWithoutDoctorInput[];
    upsert?: Prisma.ApppointmentUpsertWithWhereUniqueWithoutDoctorInput | Prisma.ApppointmentUpsertWithWhereUniqueWithoutDoctorInput[];
    createMany?: Prisma.ApppointmentCreateManyDoctorInputEnvelope;
    set?: Prisma.ApppointmentWhereUniqueInput | Prisma.ApppointmentWhereUniqueInput[];
    disconnect?: Prisma.ApppointmentWhereUniqueInput | Prisma.ApppointmentWhereUniqueInput[];
    delete?: Prisma.ApppointmentWhereUniqueInput | Prisma.ApppointmentWhereUniqueInput[];
    connect?: Prisma.ApppointmentWhereUniqueInput | Prisma.ApppointmentWhereUniqueInput[];
    update?: Prisma.ApppointmentUpdateWithWhereUniqueWithoutDoctorInput | Prisma.ApppointmentUpdateWithWhereUniqueWithoutDoctorInput[];
    updateMany?: Prisma.ApppointmentUpdateManyWithWhereWithoutDoctorInput | Prisma.ApppointmentUpdateManyWithWhereWithoutDoctorInput[];
    deleteMany?: Prisma.ApppointmentScalarWhereInput | Prisma.ApppointmentScalarWhereInput[];
};
export type ApppointmentCreateNestedManyWithoutPatientInput = {
    create?: Prisma.XOR<Prisma.ApppointmentCreateWithoutPatientInput, Prisma.ApppointmentUncheckedCreateWithoutPatientInput> | Prisma.ApppointmentCreateWithoutPatientInput[] | Prisma.ApppointmentUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.ApppointmentCreateOrConnectWithoutPatientInput | Prisma.ApppointmentCreateOrConnectWithoutPatientInput[];
    createMany?: Prisma.ApppointmentCreateManyPatientInputEnvelope;
    connect?: Prisma.ApppointmentWhereUniqueInput | Prisma.ApppointmentWhereUniqueInput[];
};
export type ApppointmentUncheckedCreateNestedManyWithoutPatientInput = {
    create?: Prisma.XOR<Prisma.ApppointmentCreateWithoutPatientInput, Prisma.ApppointmentUncheckedCreateWithoutPatientInput> | Prisma.ApppointmentCreateWithoutPatientInput[] | Prisma.ApppointmentUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.ApppointmentCreateOrConnectWithoutPatientInput | Prisma.ApppointmentCreateOrConnectWithoutPatientInput[];
    createMany?: Prisma.ApppointmentCreateManyPatientInputEnvelope;
    connect?: Prisma.ApppointmentWhereUniqueInput | Prisma.ApppointmentWhereUniqueInput[];
};
export type ApppointmentUpdateManyWithoutPatientNestedInput = {
    create?: Prisma.XOR<Prisma.ApppointmentCreateWithoutPatientInput, Prisma.ApppointmentUncheckedCreateWithoutPatientInput> | Prisma.ApppointmentCreateWithoutPatientInput[] | Prisma.ApppointmentUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.ApppointmentCreateOrConnectWithoutPatientInput | Prisma.ApppointmentCreateOrConnectWithoutPatientInput[];
    upsert?: Prisma.ApppointmentUpsertWithWhereUniqueWithoutPatientInput | Prisma.ApppointmentUpsertWithWhereUniqueWithoutPatientInput[];
    createMany?: Prisma.ApppointmentCreateManyPatientInputEnvelope;
    set?: Prisma.ApppointmentWhereUniqueInput | Prisma.ApppointmentWhereUniqueInput[];
    disconnect?: Prisma.ApppointmentWhereUniqueInput | Prisma.ApppointmentWhereUniqueInput[];
    delete?: Prisma.ApppointmentWhereUniqueInput | Prisma.ApppointmentWhereUniqueInput[];
    connect?: Prisma.ApppointmentWhereUniqueInput | Prisma.ApppointmentWhereUniqueInput[];
    update?: Prisma.ApppointmentUpdateWithWhereUniqueWithoutPatientInput | Prisma.ApppointmentUpdateWithWhereUniqueWithoutPatientInput[];
    updateMany?: Prisma.ApppointmentUpdateManyWithWhereWithoutPatientInput | Prisma.ApppointmentUpdateManyWithWhereWithoutPatientInput[];
    deleteMany?: Prisma.ApppointmentScalarWhereInput | Prisma.ApppointmentScalarWhereInput[];
};
export type ApppointmentUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: Prisma.XOR<Prisma.ApppointmentCreateWithoutPatientInput, Prisma.ApppointmentUncheckedCreateWithoutPatientInput> | Prisma.ApppointmentCreateWithoutPatientInput[] | Prisma.ApppointmentUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.ApppointmentCreateOrConnectWithoutPatientInput | Prisma.ApppointmentCreateOrConnectWithoutPatientInput[];
    upsert?: Prisma.ApppointmentUpsertWithWhereUniqueWithoutPatientInput | Prisma.ApppointmentUpsertWithWhereUniqueWithoutPatientInput[];
    createMany?: Prisma.ApppointmentCreateManyPatientInputEnvelope;
    set?: Prisma.ApppointmentWhereUniqueInput | Prisma.ApppointmentWhereUniqueInput[];
    disconnect?: Prisma.ApppointmentWhereUniqueInput | Prisma.ApppointmentWhereUniqueInput[];
    delete?: Prisma.ApppointmentWhereUniqueInput | Prisma.ApppointmentWhereUniqueInput[];
    connect?: Prisma.ApppointmentWhereUniqueInput | Prisma.ApppointmentWhereUniqueInput[];
    update?: Prisma.ApppointmentUpdateWithWhereUniqueWithoutPatientInput | Prisma.ApppointmentUpdateWithWhereUniqueWithoutPatientInput[];
    updateMany?: Prisma.ApppointmentUpdateManyWithWhereWithoutPatientInput | Prisma.ApppointmentUpdateManyWithWhereWithoutPatientInput[];
    deleteMany?: Prisma.ApppointmentScalarWhereInput | Prisma.ApppointmentScalarWhereInput[];
};
export type ApppointmentCreateNestedOneWithoutPaymentInput = {
    create?: Prisma.XOR<Prisma.ApppointmentCreateWithoutPaymentInput, Prisma.ApppointmentUncheckedCreateWithoutPaymentInput>;
    connectOrCreate?: Prisma.ApppointmentCreateOrConnectWithoutPaymentInput;
    connect?: Prisma.ApppointmentWhereUniqueInput;
};
export type ApppointmentUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: Prisma.XOR<Prisma.ApppointmentCreateWithoutPaymentInput, Prisma.ApppointmentUncheckedCreateWithoutPaymentInput>;
    connectOrCreate?: Prisma.ApppointmentCreateOrConnectWithoutPaymentInput;
    upsert?: Prisma.ApppointmentUpsertWithoutPaymentInput;
    connect?: Prisma.ApppointmentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ApppointmentUpdateToOneWithWhereWithoutPaymentInput, Prisma.ApppointmentUpdateWithoutPaymentInput>, Prisma.ApppointmentUncheckedUpdateWithoutPaymentInput>;
};
export type ApppointmentCreateNestedManyWithoutScheduleInput = {
    create?: Prisma.XOR<Prisma.ApppointmentCreateWithoutScheduleInput, Prisma.ApppointmentUncheckedCreateWithoutScheduleInput> | Prisma.ApppointmentCreateWithoutScheduleInput[] | Prisma.ApppointmentUncheckedCreateWithoutScheduleInput[];
    connectOrCreate?: Prisma.ApppointmentCreateOrConnectWithoutScheduleInput | Prisma.ApppointmentCreateOrConnectWithoutScheduleInput[];
    createMany?: Prisma.ApppointmentCreateManyScheduleInputEnvelope;
    connect?: Prisma.ApppointmentWhereUniqueInput | Prisma.ApppointmentWhereUniqueInput[];
};
export type ApppointmentUncheckedCreateNestedManyWithoutScheduleInput = {
    create?: Prisma.XOR<Prisma.ApppointmentCreateWithoutScheduleInput, Prisma.ApppointmentUncheckedCreateWithoutScheduleInput> | Prisma.ApppointmentCreateWithoutScheduleInput[] | Prisma.ApppointmentUncheckedCreateWithoutScheduleInput[];
    connectOrCreate?: Prisma.ApppointmentCreateOrConnectWithoutScheduleInput | Prisma.ApppointmentCreateOrConnectWithoutScheduleInput[];
    createMany?: Prisma.ApppointmentCreateManyScheduleInputEnvelope;
    connect?: Prisma.ApppointmentWhereUniqueInput | Prisma.ApppointmentWhereUniqueInput[];
};
export type ApppointmentUpdateManyWithoutScheduleNestedInput = {
    create?: Prisma.XOR<Prisma.ApppointmentCreateWithoutScheduleInput, Prisma.ApppointmentUncheckedCreateWithoutScheduleInput> | Prisma.ApppointmentCreateWithoutScheduleInput[] | Prisma.ApppointmentUncheckedCreateWithoutScheduleInput[];
    connectOrCreate?: Prisma.ApppointmentCreateOrConnectWithoutScheduleInput | Prisma.ApppointmentCreateOrConnectWithoutScheduleInput[];
    upsert?: Prisma.ApppointmentUpsertWithWhereUniqueWithoutScheduleInput | Prisma.ApppointmentUpsertWithWhereUniqueWithoutScheduleInput[];
    createMany?: Prisma.ApppointmentCreateManyScheduleInputEnvelope;
    set?: Prisma.ApppointmentWhereUniqueInput | Prisma.ApppointmentWhereUniqueInput[];
    disconnect?: Prisma.ApppointmentWhereUniqueInput | Prisma.ApppointmentWhereUniqueInput[];
    delete?: Prisma.ApppointmentWhereUniqueInput | Prisma.ApppointmentWhereUniqueInput[];
    connect?: Prisma.ApppointmentWhereUniqueInput | Prisma.ApppointmentWhereUniqueInput[];
    update?: Prisma.ApppointmentUpdateWithWhereUniqueWithoutScheduleInput | Prisma.ApppointmentUpdateWithWhereUniqueWithoutScheduleInput[];
    updateMany?: Prisma.ApppointmentUpdateManyWithWhereWithoutScheduleInput | Prisma.ApppointmentUpdateManyWithWhereWithoutScheduleInput[];
    deleteMany?: Prisma.ApppointmentScalarWhereInput | Prisma.ApppointmentScalarWhereInput[];
};
export type ApppointmentUncheckedUpdateManyWithoutScheduleNestedInput = {
    create?: Prisma.XOR<Prisma.ApppointmentCreateWithoutScheduleInput, Prisma.ApppointmentUncheckedCreateWithoutScheduleInput> | Prisma.ApppointmentCreateWithoutScheduleInput[] | Prisma.ApppointmentUncheckedCreateWithoutScheduleInput[];
    connectOrCreate?: Prisma.ApppointmentCreateOrConnectWithoutScheduleInput | Prisma.ApppointmentCreateOrConnectWithoutScheduleInput[];
    upsert?: Prisma.ApppointmentUpsertWithWhereUniqueWithoutScheduleInput | Prisma.ApppointmentUpsertWithWhereUniqueWithoutScheduleInput[];
    createMany?: Prisma.ApppointmentCreateManyScheduleInputEnvelope;
    set?: Prisma.ApppointmentWhereUniqueInput | Prisma.ApppointmentWhereUniqueInput[];
    disconnect?: Prisma.ApppointmentWhereUniqueInput | Prisma.ApppointmentWhereUniqueInput[];
    delete?: Prisma.ApppointmentWhereUniqueInput | Prisma.ApppointmentWhereUniqueInput[];
    connect?: Prisma.ApppointmentWhereUniqueInput | Prisma.ApppointmentWhereUniqueInput[];
    update?: Prisma.ApppointmentUpdateWithWhereUniqueWithoutScheduleInput | Prisma.ApppointmentUpdateWithWhereUniqueWithoutScheduleInput[];
    updateMany?: Prisma.ApppointmentUpdateManyWithWhereWithoutScheduleInput | Prisma.ApppointmentUpdateManyWithWhereWithoutScheduleInput[];
    deleteMany?: Prisma.ApppointmentScalarWhereInput | Prisma.ApppointmentScalarWhereInput[];
};
export type ApppointmentCreateWithoutDoctorInput = {
    id?: string;
    status?: $Enums.AppointmentStatus;
    joiningTime?: Date | string | null;
    serialNumber?: number | null;
    recordUrl?: string | null;
    recordPublicId?: string | null;
    prescriptionUrl?: string | null;
    prescriptionPublicId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    patient: Prisma.PatientCreateNestedOneWithoutAppointmentsInput;
    schedule: Prisma.ScheduleCreateNestedOneWithoutAppointmentsInput;
    payment?: Prisma.PaymentCreateNestedOneWithoutAppointmentInput;
};
export type ApppointmentUncheckedCreateWithoutDoctorInput = {
    id?: string;
    status?: $Enums.AppointmentStatus;
    joiningTime?: Date | string | null;
    serialNumber?: number | null;
    recordUrl?: string | null;
    recordPublicId?: string | null;
    prescriptionUrl?: string | null;
    prescriptionPublicId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    patientId: string;
    scheduleId: string;
    payment?: Prisma.PaymentUncheckedCreateNestedOneWithoutAppointmentInput;
};
export type ApppointmentCreateOrConnectWithoutDoctorInput = {
    where: Prisma.ApppointmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApppointmentCreateWithoutDoctorInput, Prisma.ApppointmentUncheckedCreateWithoutDoctorInput>;
};
export type ApppointmentCreateManyDoctorInputEnvelope = {
    data: Prisma.ApppointmentCreateManyDoctorInput | Prisma.ApppointmentCreateManyDoctorInput[];
    skipDuplicates?: boolean;
};
export type ApppointmentUpsertWithWhereUniqueWithoutDoctorInput = {
    where: Prisma.ApppointmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.ApppointmentUpdateWithoutDoctorInput, Prisma.ApppointmentUncheckedUpdateWithoutDoctorInput>;
    create: Prisma.XOR<Prisma.ApppointmentCreateWithoutDoctorInput, Prisma.ApppointmentUncheckedCreateWithoutDoctorInput>;
};
export type ApppointmentUpdateWithWhereUniqueWithoutDoctorInput = {
    where: Prisma.ApppointmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.ApppointmentUpdateWithoutDoctorInput, Prisma.ApppointmentUncheckedUpdateWithoutDoctorInput>;
};
export type ApppointmentUpdateManyWithWhereWithoutDoctorInput = {
    where: Prisma.ApppointmentScalarWhereInput;
    data: Prisma.XOR<Prisma.ApppointmentUpdateManyMutationInput, Prisma.ApppointmentUncheckedUpdateManyWithoutDoctorInput>;
};
export type ApppointmentScalarWhereInput = {
    AND?: Prisma.ApppointmentScalarWhereInput | Prisma.ApppointmentScalarWhereInput[];
    OR?: Prisma.ApppointmentScalarWhereInput[];
    NOT?: Prisma.ApppointmentScalarWhereInput | Prisma.ApppointmentScalarWhereInput[];
    id?: Prisma.StringFilter<"Apppointment"> | string;
    status?: Prisma.EnumAppointmentStatusFilter<"Apppointment"> | $Enums.AppointmentStatus;
    joiningTime?: Prisma.DateTimeNullableFilter<"Apppointment"> | Date | string | null;
    serialNumber?: Prisma.IntNullableFilter<"Apppointment"> | number | null;
    recordUrl?: Prisma.StringNullableFilter<"Apppointment"> | string | null;
    recordPublicId?: Prisma.StringNullableFilter<"Apppointment"> | string | null;
    prescriptionUrl?: Prisma.StringNullableFilter<"Apppointment"> | string | null;
    prescriptionPublicId?: Prisma.StringNullableFilter<"Apppointment"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Apppointment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Apppointment"> | Date | string;
    patientId?: Prisma.StringFilter<"Apppointment"> | string;
    doctorId?: Prisma.StringFilter<"Apppointment"> | string;
    scheduleId?: Prisma.StringFilter<"Apppointment"> | string;
};
export type ApppointmentCreateWithoutPatientInput = {
    id?: string;
    status?: $Enums.AppointmentStatus;
    joiningTime?: Date | string | null;
    serialNumber?: number | null;
    recordUrl?: string | null;
    recordPublicId?: string | null;
    prescriptionUrl?: string | null;
    prescriptionPublicId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    doctor: Prisma.DoctorCreateNestedOneWithoutAppointmentsInput;
    schedule: Prisma.ScheduleCreateNestedOneWithoutAppointmentsInput;
    payment?: Prisma.PaymentCreateNestedOneWithoutAppointmentInput;
};
export type ApppointmentUncheckedCreateWithoutPatientInput = {
    id?: string;
    status?: $Enums.AppointmentStatus;
    joiningTime?: Date | string | null;
    serialNumber?: number | null;
    recordUrl?: string | null;
    recordPublicId?: string | null;
    prescriptionUrl?: string | null;
    prescriptionPublicId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    doctorId: string;
    scheduleId: string;
    payment?: Prisma.PaymentUncheckedCreateNestedOneWithoutAppointmentInput;
};
export type ApppointmentCreateOrConnectWithoutPatientInput = {
    where: Prisma.ApppointmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApppointmentCreateWithoutPatientInput, Prisma.ApppointmentUncheckedCreateWithoutPatientInput>;
};
export type ApppointmentCreateManyPatientInputEnvelope = {
    data: Prisma.ApppointmentCreateManyPatientInput | Prisma.ApppointmentCreateManyPatientInput[];
    skipDuplicates?: boolean;
};
export type ApppointmentUpsertWithWhereUniqueWithoutPatientInput = {
    where: Prisma.ApppointmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.ApppointmentUpdateWithoutPatientInput, Prisma.ApppointmentUncheckedUpdateWithoutPatientInput>;
    create: Prisma.XOR<Prisma.ApppointmentCreateWithoutPatientInput, Prisma.ApppointmentUncheckedCreateWithoutPatientInput>;
};
export type ApppointmentUpdateWithWhereUniqueWithoutPatientInput = {
    where: Prisma.ApppointmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.ApppointmentUpdateWithoutPatientInput, Prisma.ApppointmentUncheckedUpdateWithoutPatientInput>;
};
export type ApppointmentUpdateManyWithWhereWithoutPatientInput = {
    where: Prisma.ApppointmentScalarWhereInput;
    data: Prisma.XOR<Prisma.ApppointmentUpdateManyMutationInput, Prisma.ApppointmentUncheckedUpdateManyWithoutPatientInput>;
};
export type ApppointmentCreateWithoutPaymentInput = {
    id?: string;
    status?: $Enums.AppointmentStatus;
    joiningTime?: Date | string | null;
    serialNumber?: number | null;
    recordUrl?: string | null;
    recordPublicId?: string | null;
    prescriptionUrl?: string | null;
    prescriptionPublicId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    patient: Prisma.PatientCreateNestedOneWithoutAppointmentsInput;
    doctor: Prisma.DoctorCreateNestedOneWithoutAppointmentsInput;
    schedule: Prisma.ScheduleCreateNestedOneWithoutAppointmentsInput;
};
export type ApppointmentUncheckedCreateWithoutPaymentInput = {
    id?: string;
    status?: $Enums.AppointmentStatus;
    joiningTime?: Date | string | null;
    serialNumber?: number | null;
    recordUrl?: string | null;
    recordPublicId?: string | null;
    prescriptionUrl?: string | null;
    prescriptionPublicId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    patientId: string;
    doctorId: string;
    scheduleId: string;
};
export type ApppointmentCreateOrConnectWithoutPaymentInput = {
    where: Prisma.ApppointmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApppointmentCreateWithoutPaymentInput, Prisma.ApppointmentUncheckedCreateWithoutPaymentInput>;
};
export type ApppointmentUpsertWithoutPaymentInput = {
    update: Prisma.XOR<Prisma.ApppointmentUpdateWithoutPaymentInput, Prisma.ApppointmentUncheckedUpdateWithoutPaymentInput>;
    create: Prisma.XOR<Prisma.ApppointmentCreateWithoutPaymentInput, Prisma.ApppointmentUncheckedCreateWithoutPaymentInput>;
    where?: Prisma.ApppointmentWhereInput;
};
export type ApppointmentUpdateToOneWithWhereWithoutPaymentInput = {
    where?: Prisma.ApppointmentWhereInput;
    data: Prisma.XOR<Prisma.ApppointmentUpdateWithoutPaymentInput, Prisma.ApppointmentUncheckedUpdateWithoutPaymentInput>;
};
export type ApppointmentUpdateWithoutPaymentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    joiningTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    serialNumber?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    recordUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordPublicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prescriptionUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prescriptionPublicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patient?: Prisma.PatientUpdateOneRequiredWithoutAppointmentsNestedInput;
    doctor?: Prisma.DoctorUpdateOneRequiredWithoutAppointmentsNestedInput;
    schedule?: Prisma.ScheduleUpdateOneRequiredWithoutAppointmentsNestedInput;
};
export type ApppointmentUncheckedUpdateWithoutPaymentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    joiningTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    serialNumber?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    recordUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordPublicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prescriptionUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prescriptionPublicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patientId?: Prisma.StringFieldUpdateOperationsInput | string;
    doctorId?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduleId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ApppointmentCreateWithoutScheduleInput = {
    id?: string;
    status?: $Enums.AppointmentStatus;
    joiningTime?: Date | string | null;
    serialNumber?: number | null;
    recordUrl?: string | null;
    recordPublicId?: string | null;
    prescriptionUrl?: string | null;
    prescriptionPublicId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    patient: Prisma.PatientCreateNestedOneWithoutAppointmentsInput;
    doctor: Prisma.DoctorCreateNestedOneWithoutAppointmentsInput;
    payment?: Prisma.PaymentCreateNestedOneWithoutAppointmentInput;
};
export type ApppointmentUncheckedCreateWithoutScheduleInput = {
    id?: string;
    status?: $Enums.AppointmentStatus;
    joiningTime?: Date | string | null;
    serialNumber?: number | null;
    recordUrl?: string | null;
    recordPublicId?: string | null;
    prescriptionUrl?: string | null;
    prescriptionPublicId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    patientId: string;
    doctorId: string;
    payment?: Prisma.PaymentUncheckedCreateNestedOneWithoutAppointmentInput;
};
export type ApppointmentCreateOrConnectWithoutScheduleInput = {
    where: Prisma.ApppointmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApppointmentCreateWithoutScheduleInput, Prisma.ApppointmentUncheckedCreateWithoutScheduleInput>;
};
export type ApppointmentCreateManyScheduleInputEnvelope = {
    data: Prisma.ApppointmentCreateManyScheduleInput | Prisma.ApppointmentCreateManyScheduleInput[];
    skipDuplicates?: boolean;
};
export type ApppointmentUpsertWithWhereUniqueWithoutScheduleInput = {
    where: Prisma.ApppointmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.ApppointmentUpdateWithoutScheduleInput, Prisma.ApppointmentUncheckedUpdateWithoutScheduleInput>;
    create: Prisma.XOR<Prisma.ApppointmentCreateWithoutScheduleInput, Prisma.ApppointmentUncheckedCreateWithoutScheduleInput>;
};
export type ApppointmentUpdateWithWhereUniqueWithoutScheduleInput = {
    where: Prisma.ApppointmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.ApppointmentUpdateWithoutScheduleInput, Prisma.ApppointmentUncheckedUpdateWithoutScheduleInput>;
};
export type ApppointmentUpdateManyWithWhereWithoutScheduleInput = {
    where: Prisma.ApppointmentScalarWhereInput;
    data: Prisma.XOR<Prisma.ApppointmentUpdateManyMutationInput, Prisma.ApppointmentUncheckedUpdateManyWithoutScheduleInput>;
};
export type ApppointmentCreateManyDoctorInput = {
    id?: string;
    status?: $Enums.AppointmentStatus;
    joiningTime?: Date | string | null;
    serialNumber?: number | null;
    recordUrl?: string | null;
    recordPublicId?: string | null;
    prescriptionUrl?: string | null;
    prescriptionPublicId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    patientId: string;
    scheduleId: string;
};
export type ApppointmentUpdateWithoutDoctorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    joiningTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    serialNumber?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    recordUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordPublicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prescriptionUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prescriptionPublicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patient?: Prisma.PatientUpdateOneRequiredWithoutAppointmentsNestedInput;
    schedule?: Prisma.ScheduleUpdateOneRequiredWithoutAppointmentsNestedInput;
    payment?: Prisma.PaymentUpdateOneWithoutAppointmentNestedInput;
};
export type ApppointmentUncheckedUpdateWithoutDoctorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    joiningTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    serialNumber?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    recordUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordPublicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prescriptionUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prescriptionPublicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patientId?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduleId?: Prisma.StringFieldUpdateOperationsInput | string;
    payment?: Prisma.PaymentUncheckedUpdateOneWithoutAppointmentNestedInput;
};
export type ApppointmentUncheckedUpdateManyWithoutDoctorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    joiningTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    serialNumber?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    recordUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordPublicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prescriptionUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prescriptionPublicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patientId?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduleId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ApppointmentCreateManyPatientInput = {
    id?: string;
    status?: $Enums.AppointmentStatus;
    joiningTime?: Date | string | null;
    serialNumber?: number | null;
    recordUrl?: string | null;
    recordPublicId?: string | null;
    prescriptionUrl?: string | null;
    prescriptionPublicId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    doctorId: string;
    scheduleId: string;
};
export type ApppointmentUpdateWithoutPatientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    joiningTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    serialNumber?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    recordUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordPublicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prescriptionUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prescriptionPublicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    doctor?: Prisma.DoctorUpdateOneRequiredWithoutAppointmentsNestedInput;
    schedule?: Prisma.ScheduleUpdateOneRequiredWithoutAppointmentsNestedInput;
    payment?: Prisma.PaymentUpdateOneWithoutAppointmentNestedInput;
};
export type ApppointmentUncheckedUpdateWithoutPatientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    joiningTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    serialNumber?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    recordUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordPublicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prescriptionUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prescriptionPublicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    doctorId?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduleId?: Prisma.StringFieldUpdateOperationsInput | string;
    payment?: Prisma.PaymentUncheckedUpdateOneWithoutAppointmentNestedInput;
};
export type ApppointmentUncheckedUpdateManyWithoutPatientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    joiningTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    serialNumber?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    recordUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordPublicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prescriptionUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prescriptionPublicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    doctorId?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduleId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ApppointmentCreateManyScheduleInput = {
    id?: string;
    status?: $Enums.AppointmentStatus;
    joiningTime?: Date | string | null;
    serialNumber?: number | null;
    recordUrl?: string | null;
    recordPublicId?: string | null;
    prescriptionUrl?: string | null;
    prescriptionPublicId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    patientId: string;
    doctorId: string;
};
export type ApppointmentUpdateWithoutScheduleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    joiningTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    serialNumber?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    recordUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordPublicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prescriptionUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prescriptionPublicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patient?: Prisma.PatientUpdateOneRequiredWithoutAppointmentsNestedInput;
    doctor?: Prisma.DoctorUpdateOneRequiredWithoutAppointmentsNestedInput;
    payment?: Prisma.PaymentUpdateOneWithoutAppointmentNestedInput;
};
export type ApppointmentUncheckedUpdateWithoutScheduleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    joiningTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    serialNumber?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    recordUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordPublicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prescriptionUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prescriptionPublicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patientId?: Prisma.StringFieldUpdateOperationsInput | string;
    doctorId?: Prisma.StringFieldUpdateOperationsInput | string;
    payment?: Prisma.PaymentUncheckedUpdateOneWithoutAppointmentNestedInput;
};
export type ApppointmentUncheckedUpdateManyWithoutScheduleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    joiningTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    serialNumber?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    recordUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordPublicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prescriptionUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prescriptionPublicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patientId?: Prisma.StringFieldUpdateOperationsInput | string;
    doctorId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ApppointmentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    status?: boolean;
    joiningTime?: boolean;
    serialNumber?: boolean;
    recordUrl?: boolean;
    recordPublicId?: boolean;
    prescriptionUrl?: boolean;
    prescriptionPublicId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    patientId?: boolean;
    doctorId?: boolean;
    scheduleId?: boolean;
    patient?: boolean | Prisma.PatientDefaultArgs<ExtArgs>;
    doctor?: boolean | Prisma.DoctorDefaultArgs<ExtArgs>;
    schedule?: boolean | Prisma.ScheduleDefaultArgs<ExtArgs>;
    payment?: boolean | Prisma.Apppointment$paymentArgs<ExtArgs>;
}, ExtArgs["result"]["apppointment"]>;
export type ApppointmentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    status?: boolean;
    joiningTime?: boolean;
    serialNumber?: boolean;
    recordUrl?: boolean;
    recordPublicId?: boolean;
    prescriptionUrl?: boolean;
    prescriptionPublicId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    patientId?: boolean;
    doctorId?: boolean;
    scheduleId?: boolean;
    patient?: boolean | Prisma.PatientDefaultArgs<ExtArgs>;
    doctor?: boolean | Prisma.DoctorDefaultArgs<ExtArgs>;
    schedule?: boolean | Prisma.ScheduleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["apppointment"]>;
export type ApppointmentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    status?: boolean;
    joiningTime?: boolean;
    serialNumber?: boolean;
    recordUrl?: boolean;
    recordPublicId?: boolean;
    prescriptionUrl?: boolean;
    prescriptionPublicId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    patientId?: boolean;
    doctorId?: boolean;
    scheduleId?: boolean;
    patient?: boolean | Prisma.PatientDefaultArgs<ExtArgs>;
    doctor?: boolean | Prisma.DoctorDefaultArgs<ExtArgs>;
    schedule?: boolean | Prisma.ScheduleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["apppointment"]>;
export type ApppointmentSelectScalar = {
    id?: boolean;
    status?: boolean;
    joiningTime?: boolean;
    serialNumber?: boolean;
    recordUrl?: boolean;
    recordPublicId?: boolean;
    prescriptionUrl?: boolean;
    prescriptionPublicId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    patientId?: boolean;
    doctorId?: boolean;
    scheduleId?: boolean;
};
export type ApppointmentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "status" | "joiningTime" | "serialNumber" | "recordUrl" | "recordPublicId" | "prescriptionUrl" | "prescriptionPublicId" | "createdAt" | "updatedAt" | "patientId" | "doctorId" | "scheduleId", ExtArgs["result"]["apppointment"]>;
export type ApppointmentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    patient?: boolean | Prisma.PatientDefaultArgs<ExtArgs>;
    doctor?: boolean | Prisma.DoctorDefaultArgs<ExtArgs>;
    schedule?: boolean | Prisma.ScheduleDefaultArgs<ExtArgs>;
    payment?: boolean | Prisma.Apppointment$paymentArgs<ExtArgs>;
};
export type ApppointmentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    patient?: boolean | Prisma.PatientDefaultArgs<ExtArgs>;
    doctor?: boolean | Prisma.DoctorDefaultArgs<ExtArgs>;
    schedule?: boolean | Prisma.ScheduleDefaultArgs<ExtArgs>;
};
export type ApppointmentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    patient?: boolean | Prisma.PatientDefaultArgs<ExtArgs>;
    doctor?: boolean | Prisma.DoctorDefaultArgs<ExtArgs>;
    schedule?: boolean | Prisma.ScheduleDefaultArgs<ExtArgs>;
};
export type $ApppointmentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Apppointment";
    objects: {
        patient: Prisma.$PatientPayload<ExtArgs>;
        doctor: Prisma.$DoctorPayload<ExtArgs>;
        schedule: Prisma.$SchedulePayload<ExtArgs>;
        payment: Prisma.$PaymentPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        status: $Enums.AppointmentStatus;
        joiningTime: Date | null;
        serialNumber: number | null;
        recordUrl: string | null;
        recordPublicId: string | null;
        prescriptionUrl: string | null;
        prescriptionPublicId: string | null;
        createdAt: Date;
        updatedAt: Date;
        patientId: string;
        doctorId: string;
        scheduleId: string;
    }, ExtArgs["result"]["apppointment"]>;
    composites: {};
};
export type ApppointmentGetPayload<S extends boolean | null | undefined | ApppointmentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ApppointmentPayload, S>;
export type ApppointmentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ApppointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ApppointmentCountAggregateInputType | true;
};
export interface ApppointmentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Apppointment'];
        meta: {
            name: 'Apppointment';
        };
    };
    /**
     * Find zero or one Apppointment that matches the filter.
     * @param {ApppointmentFindUniqueArgs} args - Arguments to find a Apppointment
     * @example
     * // Get one Apppointment
     * const apppointment = await prisma.apppointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApppointmentFindUniqueArgs>(args: Prisma.SelectSubset<T, ApppointmentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ApppointmentClient<runtime.Types.Result.GetResult<Prisma.$ApppointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Apppointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApppointmentFindUniqueOrThrowArgs} args - Arguments to find a Apppointment
     * @example
     * // Get one Apppointment
     * const apppointment = await prisma.apppointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApppointmentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ApppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ApppointmentClient<runtime.Types.Result.GetResult<Prisma.$ApppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Apppointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApppointmentFindFirstArgs} args - Arguments to find a Apppointment
     * @example
     * // Get one Apppointment
     * const apppointment = await prisma.apppointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApppointmentFindFirstArgs>(args?: Prisma.SelectSubset<T, ApppointmentFindFirstArgs<ExtArgs>>): Prisma.Prisma__ApppointmentClient<runtime.Types.Result.GetResult<Prisma.$ApppointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Apppointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApppointmentFindFirstOrThrowArgs} args - Arguments to find a Apppointment
     * @example
     * // Get one Apppointment
     * const apppointment = await prisma.apppointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApppointmentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ApppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ApppointmentClient<runtime.Types.Result.GetResult<Prisma.$ApppointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Apppointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Apppointments
     * const apppointments = await prisma.apppointment.findMany()
     *
     * // Get first 10 Apppointments
     * const apppointments = await prisma.apppointment.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const apppointmentWithIdOnly = await prisma.apppointment.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ApppointmentFindManyArgs>(args?: Prisma.SelectSubset<T, ApppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Apppointment.
     * @param {ApppointmentCreateArgs} args - Arguments to create a Apppointment.
     * @example
     * // Create one Apppointment
     * const Apppointment = await prisma.apppointment.create({
     *   data: {
     *     // ... data to create a Apppointment
     *   }
     * })
     *
     */
    create<T extends ApppointmentCreateArgs>(args: Prisma.SelectSubset<T, ApppointmentCreateArgs<ExtArgs>>): Prisma.Prisma__ApppointmentClient<runtime.Types.Result.GetResult<Prisma.$ApppointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Apppointments.
     * @param {ApppointmentCreateManyArgs} args - Arguments to create many Apppointments.
     * @example
     * // Create many Apppointments
     * const apppointment = await prisma.apppointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ApppointmentCreateManyArgs>(args?: Prisma.SelectSubset<T, ApppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Apppointments and returns the data saved in the database.
     * @param {ApppointmentCreateManyAndReturnArgs} args - Arguments to create many Apppointments.
     * @example
     * // Create many Apppointments
     * const apppointment = await prisma.apppointment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Apppointments and only return the `id`
     * const apppointmentWithIdOnly = await prisma.apppointment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ApppointmentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ApppointmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApppointmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Apppointment.
     * @param {ApppointmentDeleteArgs} args - Arguments to delete one Apppointment.
     * @example
     * // Delete one Apppointment
     * const Apppointment = await prisma.apppointment.delete({
     *   where: {
     *     // ... filter to delete one Apppointment
     *   }
     * })
     *
     */
    delete<T extends ApppointmentDeleteArgs>(args: Prisma.SelectSubset<T, ApppointmentDeleteArgs<ExtArgs>>): Prisma.Prisma__ApppointmentClient<runtime.Types.Result.GetResult<Prisma.$ApppointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Apppointment.
     * @param {ApppointmentUpdateArgs} args - Arguments to update one Apppointment.
     * @example
     * // Update one Apppointment
     * const apppointment = await prisma.apppointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ApppointmentUpdateArgs>(args: Prisma.SelectSubset<T, ApppointmentUpdateArgs<ExtArgs>>): Prisma.Prisma__ApppointmentClient<runtime.Types.Result.GetResult<Prisma.$ApppointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Apppointments.
     * @param {ApppointmentDeleteManyArgs} args - Arguments to filter Apppointments to delete.
     * @example
     * // Delete a few Apppointments
     * const { count } = await prisma.apppointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ApppointmentDeleteManyArgs>(args?: Prisma.SelectSubset<T, ApppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Apppointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Apppointments
     * const apppointment = await prisma.apppointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ApppointmentUpdateManyArgs>(args: Prisma.SelectSubset<T, ApppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Apppointments and returns the data updated in the database.
     * @param {ApppointmentUpdateManyAndReturnArgs} args - Arguments to update many Apppointments.
     * @example
     * // Update many Apppointments
     * const apppointment = await prisma.apppointment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Apppointments and only return the `id`
     * const apppointmentWithIdOnly = await prisma.apppointment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ApppointmentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ApppointmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApppointmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Apppointment.
     * @param {ApppointmentUpsertArgs} args - Arguments to update or create a Apppointment.
     * @example
     * // Update or create a Apppointment
     * const apppointment = await prisma.apppointment.upsert({
     *   create: {
     *     // ... data to create a Apppointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Apppointment we want to update
     *   }
     * })
     */
    upsert<T extends ApppointmentUpsertArgs>(args: Prisma.SelectSubset<T, ApppointmentUpsertArgs<ExtArgs>>): Prisma.Prisma__ApppointmentClient<runtime.Types.Result.GetResult<Prisma.$ApppointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Apppointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApppointmentCountArgs} args - Arguments to filter Apppointments to count.
     * @example
     * // Count the number of Apppointments
     * const count = await prisma.apppointment.count({
     *   where: {
     *     // ... the filter for the Apppointments we want to count
     *   }
     * })
    **/
    count<T extends ApppointmentCountArgs>(args?: Prisma.Subset<T, ApppointmentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ApppointmentCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Apppointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApppointmentAggregateArgs>(args: Prisma.Subset<T, ApppointmentAggregateArgs>): Prisma.PrismaPromise<GetApppointmentAggregateType<T>>;
    /**
     * Group by Apppointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApppointmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends ApppointmentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ApppointmentGroupByArgs['orderBy'];
    } : {
        orderBy?: ApppointmentGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ApppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Apppointment model
     */
    readonly fields: ApppointmentFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Apppointment.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ApppointmentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    patient<T extends Prisma.PatientDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PatientDefaultArgs<ExtArgs>>): Prisma.Prisma__PatientClient<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    doctor<T extends Prisma.DoctorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DoctorDefaultArgs<ExtArgs>>): Prisma.Prisma__DoctorClient<runtime.Types.Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    schedule<T extends Prisma.ScheduleDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ScheduleDefaultArgs<ExtArgs>>): Prisma.Prisma__ScheduleClient<runtime.Types.Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    payment<T extends Prisma.Apppointment$paymentArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Apppointment$paymentArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Apppointment model
 */
export interface ApppointmentFieldRefs {
    readonly id: Prisma.FieldRef<"Apppointment", 'String'>;
    readonly status: Prisma.FieldRef<"Apppointment", 'AppointmentStatus'>;
    readonly joiningTime: Prisma.FieldRef<"Apppointment", 'DateTime'>;
    readonly serialNumber: Prisma.FieldRef<"Apppointment", 'Int'>;
    readonly recordUrl: Prisma.FieldRef<"Apppointment", 'String'>;
    readonly recordPublicId: Prisma.FieldRef<"Apppointment", 'String'>;
    readonly prescriptionUrl: Prisma.FieldRef<"Apppointment", 'String'>;
    readonly prescriptionPublicId: Prisma.FieldRef<"Apppointment", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Apppointment", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Apppointment", 'DateTime'>;
    readonly patientId: Prisma.FieldRef<"Apppointment", 'String'>;
    readonly doctorId: Prisma.FieldRef<"Apppointment", 'String'>;
    readonly scheduleId: Prisma.FieldRef<"Apppointment", 'String'>;
}
/**
 * Apppointment findUnique
 */
export type ApppointmentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apppointment
     */
    select?: Prisma.ApppointmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Apppointment
     */
    omit?: Prisma.ApppointmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApppointmentInclude<ExtArgs> | null;
    /**
     * Filter, which Apppointment to fetch.
     */
    where: Prisma.ApppointmentWhereUniqueInput;
};
/**
 * Apppointment findUniqueOrThrow
 */
export type ApppointmentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apppointment
     */
    select?: Prisma.ApppointmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Apppointment
     */
    omit?: Prisma.ApppointmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApppointmentInclude<ExtArgs> | null;
    /**
     * Filter, which Apppointment to fetch.
     */
    where: Prisma.ApppointmentWhereUniqueInput;
};
/**
 * Apppointment findFirst
 */
export type ApppointmentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apppointment
     */
    select?: Prisma.ApppointmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Apppointment
     */
    omit?: Prisma.ApppointmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApppointmentInclude<ExtArgs> | null;
    /**
     * Filter, which Apppointment to fetch.
     */
    where?: Prisma.ApppointmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Apppointments to fetch.
     */
    orderBy?: Prisma.ApppointmentOrderByWithRelationInput | Prisma.ApppointmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Apppointments.
     */
    cursor?: Prisma.ApppointmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Apppointments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Apppointments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Apppointments.
     */
    distinct?: Prisma.ApppointmentScalarFieldEnum | Prisma.ApppointmentScalarFieldEnum[];
};
/**
 * Apppointment findFirstOrThrow
 */
export type ApppointmentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apppointment
     */
    select?: Prisma.ApppointmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Apppointment
     */
    omit?: Prisma.ApppointmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApppointmentInclude<ExtArgs> | null;
    /**
     * Filter, which Apppointment to fetch.
     */
    where?: Prisma.ApppointmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Apppointments to fetch.
     */
    orderBy?: Prisma.ApppointmentOrderByWithRelationInput | Prisma.ApppointmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Apppointments.
     */
    cursor?: Prisma.ApppointmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Apppointments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Apppointments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Apppointments.
     */
    distinct?: Prisma.ApppointmentScalarFieldEnum | Prisma.ApppointmentScalarFieldEnum[];
};
/**
 * Apppointment findMany
 */
export type ApppointmentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apppointment
     */
    select?: Prisma.ApppointmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Apppointment
     */
    omit?: Prisma.ApppointmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApppointmentInclude<ExtArgs> | null;
    /**
     * Filter, which Apppointments to fetch.
     */
    where?: Prisma.ApppointmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Apppointments to fetch.
     */
    orderBy?: Prisma.ApppointmentOrderByWithRelationInput | Prisma.ApppointmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Apppointments.
     */
    cursor?: Prisma.ApppointmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Apppointments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Apppointments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Apppointments.
     */
    distinct?: Prisma.ApppointmentScalarFieldEnum | Prisma.ApppointmentScalarFieldEnum[];
};
/**
 * Apppointment create
 */
export type ApppointmentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apppointment
     */
    select?: Prisma.ApppointmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Apppointment
     */
    omit?: Prisma.ApppointmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApppointmentInclude<ExtArgs> | null;
    /**
     * The data needed to create a Apppointment.
     */
    data: Prisma.XOR<Prisma.ApppointmentCreateInput, Prisma.ApppointmentUncheckedCreateInput>;
};
/**
 * Apppointment createMany
 */
export type ApppointmentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Apppointments.
     */
    data: Prisma.ApppointmentCreateManyInput | Prisma.ApppointmentCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Apppointment createManyAndReturn
 */
export type ApppointmentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apppointment
     */
    select?: Prisma.ApppointmentSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Apppointment
     */
    omit?: Prisma.ApppointmentOmit<ExtArgs> | null;
    /**
     * The data used to create many Apppointments.
     */
    data: Prisma.ApppointmentCreateManyInput | Prisma.ApppointmentCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApppointmentIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Apppointment update
 */
export type ApppointmentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apppointment
     */
    select?: Prisma.ApppointmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Apppointment
     */
    omit?: Prisma.ApppointmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApppointmentInclude<ExtArgs> | null;
    /**
     * The data needed to update a Apppointment.
     */
    data: Prisma.XOR<Prisma.ApppointmentUpdateInput, Prisma.ApppointmentUncheckedUpdateInput>;
    /**
     * Choose, which Apppointment to update.
     */
    where: Prisma.ApppointmentWhereUniqueInput;
};
/**
 * Apppointment updateMany
 */
export type ApppointmentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Apppointments.
     */
    data: Prisma.XOR<Prisma.ApppointmentUpdateManyMutationInput, Prisma.ApppointmentUncheckedUpdateManyInput>;
    /**
     * Filter which Apppointments to update
     */
    where?: Prisma.ApppointmentWhereInput;
    /**
     * Limit how many Apppointments to update.
     */
    limit?: number;
};
/**
 * Apppointment updateManyAndReturn
 */
export type ApppointmentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apppointment
     */
    select?: Prisma.ApppointmentSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Apppointment
     */
    omit?: Prisma.ApppointmentOmit<ExtArgs> | null;
    /**
     * The data used to update Apppointments.
     */
    data: Prisma.XOR<Prisma.ApppointmentUpdateManyMutationInput, Prisma.ApppointmentUncheckedUpdateManyInput>;
    /**
     * Filter which Apppointments to update
     */
    where?: Prisma.ApppointmentWhereInput;
    /**
     * Limit how many Apppointments to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApppointmentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Apppointment upsert
 */
export type ApppointmentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apppointment
     */
    select?: Prisma.ApppointmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Apppointment
     */
    omit?: Prisma.ApppointmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApppointmentInclude<ExtArgs> | null;
    /**
     * The filter to search for the Apppointment to update in case it exists.
     */
    where: Prisma.ApppointmentWhereUniqueInput;
    /**
     * In case the Apppointment found by the `where` argument doesn't exist, create a new Apppointment with this data.
     */
    create: Prisma.XOR<Prisma.ApppointmentCreateInput, Prisma.ApppointmentUncheckedCreateInput>;
    /**
     * In case the Apppointment was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ApppointmentUpdateInput, Prisma.ApppointmentUncheckedUpdateInput>;
};
/**
 * Apppointment delete
 */
export type ApppointmentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apppointment
     */
    select?: Prisma.ApppointmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Apppointment
     */
    omit?: Prisma.ApppointmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApppointmentInclude<ExtArgs> | null;
    /**
     * Filter which Apppointment to delete.
     */
    where: Prisma.ApppointmentWhereUniqueInput;
};
/**
 * Apppointment deleteMany
 */
export type ApppointmentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Apppointments to delete
     */
    where?: Prisma.ApppointmentWhereInput;
    /**
     * Limit how many Apppointments to delete.
     */
    limit?: number;
};
/**
 * Apppointment.payment
 */
export type Apppointment$paymentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payment
     */
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PaymentInclude<ExtArgs> | null;
    where?: Prisma.PaymentWhereInput;
};
/**
 * Apppointment without action
 */
export type ApppointmentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apppointment
     */
    select?: Prisma.ApppointmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Apppointment
     */
    omit?: Prisma.ApppointmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApppointmentInclude<ExtArgs> | null;
};
//# sourceMappingURL=Apppointment.d.ts.map