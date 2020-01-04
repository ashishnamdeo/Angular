import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { CoreComponent } from './core.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SharedMaterialModule } from '../shared-material/shared-material.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LoginComponent,
    CoreComponent,
    HomeComponent,
    HeaderComponent,
    RegistrationComponent
  ],
  imports: [
    CoreRoutingModule,
    SharedMaterialModule,
    HttpClientModule
  ],
  exports: [
    LoginComponent,
    CoreComponent,
    HomeComponent
  ]
})
export class CoreModule { }
