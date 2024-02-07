import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressStudentModalComponent } from './progress-student-modal.component';

describe('ProgressStudentModalComponent', () => {
  let component: ProgressStudentModalComponent;
  let fixture: ComponentFixture<ProgressStudentModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressStudentModalComponent]
    });
    fixture = TestBed.createComponent(ProgressStudentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
