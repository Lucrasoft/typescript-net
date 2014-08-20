module System
{
	export enum GCNotificationStatus {
        Succeeded,
        Failed,
        Canceled,
        Timeout,
        NotApplicable
    }

    System.Type.registerEnum(GCNotificationStatus, "System.GCNotificationStatus");

}