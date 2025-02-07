import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicingComponent } from './invoicing.component';

describe('InvoicingComponent', () => {
  let component: InvoicingComponent;
  let fixture: ComponentFixture<InvoicingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvoicingComponent]
    });
    fixture = TestBed.createComponent(InvoicingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
