import {Injectable, Inject} from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { IUser } from '../modal/IUser';
import { APP_CONFIG } from '../../shared-material/AppConfig';
import { IAppConfig } from '../../shared-material/IAppConfig';
import { IResponse } from '../modal/IResponse';
@Injectable({
    providedIn: 'root'
})
export class UserLoginService {
    constructor(
        private http: HttpClient,
        @Inject(APP_CONFIG) private appConfig: IAppConfig
    ) { console.log(appConfig.apiEndPoint) }

        login(user: IUser) {
            return this.http.post<IResponse>(this.appConfig.apiEndPoint + '/user/login', user)
        }
}