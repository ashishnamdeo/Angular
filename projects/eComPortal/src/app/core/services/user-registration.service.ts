import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { APP_CONFIG } from '../../shared-material/AppConfig';
import { IAppConfig } from '../../shared-material/IAppConfig';
import { IUserRegistration } from '../modal/IUserRegistration';
import { IResponse } from '../modal/IResponse';


@Injectable({
    providedIn: 'root'
})

export class UserRegistrationService {
    constructor(
        private http: HttpClient,
        @Inject(APP_CONFIG) private appConfig: IAppConfig
    ) { console.log(appConfig.apiEndPoint) }

    register(user:IUserRegistration){
        return this.http.post<IResponse>(this.appConfig.apiEndPoint + '/user/registration', user);
    }
}