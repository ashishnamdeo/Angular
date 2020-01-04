import { Injectable, Inject } from '@angular/core';
import { APP_CONFIG } from '../../shared-material/AppConfig';
import { IAppConfig } from '../../shared-material/IAppConfig';
import { HttpClient } from '@angular/common/http';
import { IResponse } from '../../core/modal/IResponse';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient,   
     @Inject(APP_CONFIG) private appConfig: IAppConfig) { }

     getDashboard() {
       return this.http.get<IResponse>(this.appConfig.apiEndPoint + '/order/admin/dashboard')
     }    
}
