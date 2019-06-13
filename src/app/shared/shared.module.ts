import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgBootstrapModalComponent} from './components/ng-bootstrap-modal/ng-bootstrap-modal.component';
import {AddCustomerModalComponent} from '../customers/add-customer-modal/add-customer-modal.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    NgBootstrapModalComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgBootstrapModalComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
