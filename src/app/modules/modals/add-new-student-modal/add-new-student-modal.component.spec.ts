import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewStudentModalComponent } from './add-new-student-modal.component';

describe('AddNewStudentModalComponent', () => {
  let component: AddNewStudentModalComponent;
  let fixture: ComponentFixture<AddNewStudentModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewStudentModalComponent]
    });
    fixture = TestBed.createComponent(AddNewStudentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
