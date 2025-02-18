import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageComponent } from './language.component';
import { MatDialogModule } from '@angular/material/dialog';

describe('LanguageComponent', () => {
  let component: LanguageComponent;
  let fixture: ComponentFixture<LanguageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LanguageComponent],
      imports: [MatDialogModule]  
    });
    fixture = TestBed.createComponent(LanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
