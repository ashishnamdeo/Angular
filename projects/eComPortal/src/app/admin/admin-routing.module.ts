import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../core/auth/auth.guard';
import {AdminGuard} from '../admin/guard/admin.guard';
 

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [ AuthGuard, AdminGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
