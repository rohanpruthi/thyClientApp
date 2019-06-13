import { Component, OnInit, Input } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ng-bootstrap-modal',
  templateUrl: './ng-bootstrap-modal.component.html',
  styleUrls: ['./ng-bootstrap-modal.component.scss']
})
export class NgBootstrapModalComponent implements OnInit {
  @Input() title = '';
  @Input() isFormSubmitButton: boolean = false;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
