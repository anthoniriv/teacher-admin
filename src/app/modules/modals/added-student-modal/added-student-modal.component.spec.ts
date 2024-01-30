import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedStudentModalComponent } from './added-student-modal.component';

describe('AddedStudentModalComponent', () => {
  let component: AddedStudentModalComponent;
  let fixture: ComponentFixture<AddedStudentModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddedStudentModalComponent]
    });
    fixture = TestBed.createComponent(AddedStudentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
