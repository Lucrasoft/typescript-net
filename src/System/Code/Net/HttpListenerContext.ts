module System.Net {
	export class HttpListenerContext {
        request: HttpListenerRequest;
        response: HttpListenerResponse;
        user: IPrincipal;
        cnc: HttpConnection ;
        error: string;
		err_status: number = 400;
        Listener: HttpListener;

        HttpListenerContext(cnc: HttpConnection)
		{
            this.cnc = cnc;
            this.request = new HttpListenerRequest(this);
            this.response = new HttpListenerResponse(this);
        }

		get ErrorStatus(): number {
			return this.err_status;

        }
        set ErrorStatus(value:number){
            this.err_status = value;
        }


        get ErrorMessage(): string {
            return this.error;
        }
        set ErrorMessage(value: string) {
			this.error = value; 
        }

		get HaveError(): boolean {
            return (this.error != null);
        }

        get Connection(): HttpConnection {
			return this.cnc;
		}

        get Request(): HttpListenerRequest {
			return this.request;
		}

        get Response(): HttpListenerResponse {
			 return this.response;
		}

        get User(): IPrincipal {
	        return this.user; 
        }

        ParseAuthentication(expectedSchemes: AuthenticationSchemes): void  {
        if (expectedSchemes == AuthenticationSchemes.Anonymous)
            return;

			
            header: string = request.Headers["Authorization"];
        if (header == null || header.Length < 2)
        return;

            authenticationData: string [] = header.Split(new Char []{' ' }, 2);
    if (string.Compare(authenticationData[0], "basic", true) == 0) {
        user = ParseBasicAuthentication(authenticationData[1]);
    }
    // TODO: throw if malformed -> 400 bad request
}
	
        ParseBasicAuthentication(authData: string): IPrincipal {
        try {
                user: string = null;
                password: string = null;
				pos: number = -1;
                authString: string = System.Text.Encoding.Default.GetString(Convert.FromBase64String(authData));

        // The format is DOMAIN\username:password
        // Domain is optional

        pos = authString.IndexOf(':');

        // parse the password off the end
        password = authString.Substring(pos + 1);

        // discard the password
        authString = authString.Substring(0, pos);

        // check if there is a domain
        pos = authString.IndexOf('\\');

        if (pos > 0) {
            //domain = authString.Substring (0, pos);
            user = authString.Substring(pos);
        } else {
            user = authString;
        }
	
        identity: HttpListenerBasicIdentity = new HttpListenerBasicIdentity(user, password);
        // TODO: What are the roles MS sets
        return new GenericPrincipal(identity, new string[0]);
    } catch (Exception) {
        // Invalid auth data is swallowed silently
        return null;
    } 
		}
	}
}