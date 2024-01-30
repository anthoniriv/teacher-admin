import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParrotsComponent } from './parrots.component';

describe('ParrotsComponent', () => {
  let component: ParrotsComponent;
  let fixture: ComponentFixture<ParrotsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParrotsComponent]
    });
    fixture = TestBed.createComponent(ParrotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
