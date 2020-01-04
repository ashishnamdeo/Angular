import{ NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'; 
import { CustomerComponent } from './customer/customer.component';

const customersRoute: Routes = [
    {
        path: '',
        component: CustomerComponent
    }

]

@NgModule ({
    imports:[
        RouterModule.forChild(customersRoute)
    ],
    exports: [
        RouterModule
    ]
})

export class CustomersRouterModule{}
