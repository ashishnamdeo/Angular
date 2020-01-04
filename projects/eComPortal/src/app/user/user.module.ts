import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ProfileComponent } from './profile/profile.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
@NgModule({
  declarations: [
    UserComponent,
    ProfileComponent,
    UserDashboardComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports: [
  ]
})
export class UserModule { }
