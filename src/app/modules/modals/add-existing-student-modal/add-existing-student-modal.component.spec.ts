import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExistingStudentModalComponent } from './add-existing-student-modal.component';

describe('AddExistingStudentModalComponent', () => {
  let component: AddExistingStudentModalComponent;
  let fixture: ComponentFixture<AddExistingStudentModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddExistingStudentModalComponent]
    });
    fixture = TestBed.createComponent(AddExistingStudentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
