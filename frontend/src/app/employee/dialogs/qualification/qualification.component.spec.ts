import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationComponent } from './qualification.component';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

describe('QualificationComponent', () => {
  let component: QualificationComponent;
  let fixture: ComponentFixture<QualificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QualificationComponent],
      imports: [MatDialogModule, ReactiveFormsModule]  ,
      providers: [
        { provide: MatDialog, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    });
    fixture = TestBed.createComponent(QualificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
