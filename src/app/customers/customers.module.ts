import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersLandingComponent } from './customers-landing/customers-landing.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { SharedModule } from '../shared/shared.module';
import {AddCustomerModalComponent} from './add-customer-modal/add-customer-modal.component';
import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    CustomersLandingComponent,
    AddCustomerComponent,
    AddCustomerModalComponent
    ],
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    CustomersRoutingModule,
    SharedModule
  ],
  providers: [
    NgbActiveModal
  ],
  entryComponents: [
    AddCustomerModalComponent
  ]
})
export class CustomersModule { }
