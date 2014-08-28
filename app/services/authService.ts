module fimz {
    export class AuthService {
        constructor(private $http: ng.IHttpService) {
        }

		public fbLogin = () => {
		}
		
		public login = (user : string, pass : string){
		}
		
		public fbLogout = () {
		}
		
		public logout = () => {
			this.fbLogout();
		}
    }
}

app.service("authService", ["$http", fimz.TopicService]);
