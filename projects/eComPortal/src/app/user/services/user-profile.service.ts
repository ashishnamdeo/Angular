import { Injectable, Inject } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
import { IResponse } from '../../core/modal/IResponse';
import { APP_CONFIG } from '../../shared-material/AppConfig';
import { IAppConfig } from '../../shared-material/IAppConfig';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor( 
      private http: HttpClient,
      @Inject(APP_CONFIG) private appConfig: IAppConfig
      ) { }

  getProfile() {
    return this.http.get<IResponse>(this.appConfig.apiEndPoint + '/user')
  }
    
  
}
