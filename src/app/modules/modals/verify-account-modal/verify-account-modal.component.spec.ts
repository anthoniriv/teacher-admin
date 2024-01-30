import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyAccountModalComponent } from './verify-account-modal.component';

describe('VerifyAccountModalComponent', () => {
  let component: VerifyAccountModalComponent;
  let fixture: ComponentFixture<VerifyAccountModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifyAccountModalComponent]
    });
    fixture = TestBed.createComponent(VerifyAccountModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
