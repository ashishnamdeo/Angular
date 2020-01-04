import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { HttpBackend } from '@angular/common/http';
import { APP_CONFIG } from '../../shared-material/AppConfig';
import {MatSnackBar} from '@angular/material'


@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {

  constructor( private injector: Injector) { }

  handleError(error: any): void {
    if (error != null || error !== ''){
      const http = this.injector.get(HttpBackend);
      const appConfig =  this.injector.get(APP_CONFIG);
      const snackBar = this.injector.get(MatSnackBar);
      const errorMessage = JSON.stringify(error);
      http.post(appConfig.apiEndPoint + '/errorLog', {error:  errorMessage} )
        .subscribe((res)=>{
          snackBar.open('There is problem in in operation Performing', 'Error!!',{
            duration: 4000,
          });
        })
    }
  }
}
