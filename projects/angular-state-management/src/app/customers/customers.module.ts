import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerComponent } from './customer/customer.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomersRouterModule } from './customers.routing-module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { CustomerReducer } from './state/customer.reducer'
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [CustomerComponent, CustomerAddComponent, CustomerEditComponent, CustomerListComponent],
  imports: [
    CommonModule,  
    CustomersRouterModule ,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forFeature("customers", CustomerReducer)
  ]
})
export class CustomersModule { }
