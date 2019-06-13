import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersLandingComponent } from './customers-landing/customers-landing.component';

const routes: Routes = [
  {path: '', component: CustomersLandingComponent, data: {title: 'Customers'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
