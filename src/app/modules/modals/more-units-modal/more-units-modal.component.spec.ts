import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreUnitsModalComponent } from './more-units-modal.component';

describe('MoreUnitsModalComponent', () => {
  let component: MoreUnitsModalComponent;
  let fixture: ComponentFixture<MoreUnitsModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoreUnitsModalComponent]
    });
    fixture = TestBed.createComponent(MoreUnitsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
