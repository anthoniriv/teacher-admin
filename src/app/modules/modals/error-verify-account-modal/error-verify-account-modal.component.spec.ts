import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorVerifyAccountModalComponent } from './error-verify-account-modal.component';

describe('ErrorVerifyAccountModalComponent', () => {
  let component: ErrorVerifyAccountModalComponent;
  let fixture: ComponentFixture<ErrorVerifyAccountModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorVerifyAccountModalComponent]
    });
    fixture = TestBed.createComponent(ErrorVerifyAccountModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
