module System.Net {
    export interface AuthenticationSchemeSelector{
        (httpRequest: HttpListenerRequest): AuthenticationSchemes;
    }

    System.Type.registerInterface("System.Net.AuthenticationSchemeSelector");
}