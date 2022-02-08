import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from 'src/app/components/customer/customer.component';
import { CustomerAddComponent } from 'src/app/components/customer-add/customer-add.component';
import { CustomerEditComponent } from 'src/app/components/customer-edit/customer-edit.component';
import { CustomerListComponent } from 'src/app/components/customer-list/customer-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const customerRoutes: Routes = [{ path: '', component: CustomerComponent }];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(customerRoutes),
  ],
  declarations: [
    CustomerComponent,
    CustomerAddComponent,
    CustomerEditComponent,
    CustomerListComponent,
  ],
})
export class CustomersModule {}
