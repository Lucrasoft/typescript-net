module System.Net {
    export interface BindIPEndPoint {
        (servicePoint: ServicePoint, remoteEndPoint: IPEndPoint, retryCount: number): IPEndPoint;
    }
    System.Type.registerInterface("System.Net.BindIPEndPoint");
}