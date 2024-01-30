import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacawsComponent } from './macaws.component';

describe('MacawsComponent', () => {
  let component: MacawsComponent;
  let fixture: ComponentFixture<MacawsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MacawsComponent]
    });
    fixture = TestBed.createComponent(MacawsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
