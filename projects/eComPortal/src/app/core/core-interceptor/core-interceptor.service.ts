import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'
import {map, catchError} from 'rxjs/Operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CoreInterceptorService  implements HttpInterceptor{

  constructor( private router:Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      let request = req.clone({});

      if( sessionStorage.getItem('token') != null){
        console.log('session=====', sessionStorage.getItem('token') != null)
        const header = new HttpHeaders().set('x-access-token', sessionStorage.getItem('token'));
        request = req.clone({ headers: header})
      }

      

    console.log('INterceptor-------', req);

     // Sent request to the API
     return next.handle(request)
      .pipe(
        map((event:HttpEvent<any>)=>{
          return event;
        }), catchError((error: HttpErrorResponse)=>{
          if(error.status === 401){
            this.router.navigate(['/login'])
          }
          return throwError(error);
        })  
      ) 
  }
}
