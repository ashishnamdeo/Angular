import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule,MatSnackBar, MatSnackBarModule } from '@angular/material'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_CONFIG } from './AppConfig';
import { IAppConfig } from './IAppConfig';
import { environment } from '../../environments/environment';

const AppConfig:IAppConfig = {
  apiEndPoint:environment.apiEndPoint
}


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSnackBarModule

  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,  
    MatNativeDateModule,
    MatButtonModule

  ],
  providers: [
    { provide: APP_CONFIG, useValue:AppConfig}
  ]
})
export class SharedMaterialModule { }
