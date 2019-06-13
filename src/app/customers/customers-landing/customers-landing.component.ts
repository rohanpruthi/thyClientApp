import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AddCustomerComponent} from '../add-customer/add-customer.component';
import {NgBootstrapModalComponent} from '../../shared/components/ng-bootstrap-modal/ng-bootstrap-modal.component';
import {AddCustomerModalComponent} from '../add-customer-modal/add-customer-modal.component';

@Component({
  selector: 'app-customers-landing',
  templateUrl: './customers-landing.component.html',
  styleUrls: ['./customers-landing.component.scss']
})
export class CustomersLandingComponent implements OnInit {
  dummyCustomers: any = [
    {
      firstName: 'John',
      lastName: 'Doe',
      gender: 'Male'
    },
    {
      firstName: 'Jane',
      lastName: 'Doe',
      gender: 'Female'
    }
  ];
  constructor(private modalService: NgbModal) { }

  openModal() {
    const  modalRef = this.modalService.open(AddCustomerModalComponent);
    modalRef.componentInstance.title = 'Add New Customer';
  } ngOnInit() {
  }

}
