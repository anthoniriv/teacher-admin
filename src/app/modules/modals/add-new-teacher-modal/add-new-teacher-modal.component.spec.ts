import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewTeacherModalComponent } from './add-new-teacher-modal.component';

describe('AddNewTeacherModalComponent', () => {
  let component: AddNewTeacherModalComponent;
  let fixture: ComponentFixture<AddNewTeacherModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewTeacherModalComponent]
    });
    fixture = TestBed.createComponent(AddNewTeacherModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
