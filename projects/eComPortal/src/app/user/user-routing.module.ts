import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from '../core/auth/auth.guard';
import { UserGuard } from './guard/user.guard';


const routes: Routes = [
  {
    path:'user', component: UserComponent
  },
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard, UserGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
