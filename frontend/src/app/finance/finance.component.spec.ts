import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceComponent } from './finance.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('FinanceComponent', () => {
  let component: FinanceComponent;
  let fixture: ComponentFixture<FinanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinanceComponent],
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(FinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
