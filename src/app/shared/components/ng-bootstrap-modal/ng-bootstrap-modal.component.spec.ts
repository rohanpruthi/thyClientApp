import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBootstrapModalComponent } from './ng-bootstrap-modal.component';

describe('NgBootstrapModalComponent', () => {
  let component: NgBootstrapModalComponent;
  let fixture: ComponentFixture<NgBootstrapModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgBootstrapModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBootstrapModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
