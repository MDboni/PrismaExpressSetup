import { RequestUser } from "../../middleware/checkAuth";
export declare const AnalyticsServices: {
    getAdminAnalytics: () => Promise<{
        totalDoctors: number;
        totalPendingDoctorApplications: number;
        totalApprovedDoctors: number;
        totalRejectedDoctors: number;
        totalPatients: number;
        totalAppointments: number;
        totalCompletedAppointments: number;
        totalCancelledAppointments: number;
        totalRevenue: number;
        totalRefunded: number;
    }>;
    getPatientAnalytics: (user: RequestUser) => Promise<{
        totalAppointments: number;
        upcomingAppointments: number;
        completedAppointments: number;
        cancelledAppointments: number;
        totalAmountSpent: number;
        totalRefunded: number;
    }>;
    getDoctorAnalytics: (user: RequestUser) => Promise<{
        totalSchedules: number;
        publishedSchedules: number;
        totalAppointments: number;
        upcomingAppointments: number;
        ongoingAppointments: number;
        completedAppointments: number;
        cancelledAppointments: number;
        totalDoctorEarnings: number;
        totalDoctorRefunded: number;
    }>;
};
//# sourceMappingURL=analytics.service.d.ts.map