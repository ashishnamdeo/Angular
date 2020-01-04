import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AdminModule } from './admin/admin.module';
// import { UserModule } from './user/user.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path:'admin', loadChildren:'./admin/admin.module#AdminModule'
  },
  {
    path: 'user', loadChildren:'./user/user.module#UserModule'
  },
  // {
  //   path:'**', component: PageNotFoundComponent
  // }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
