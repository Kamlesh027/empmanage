import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeformComponent } from './employeform.component';

describe('EmployeformComponent', () => {
  let component: EmployeformComponent;
  let fixture: ComponentFixture<EmployeformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeformComponent]
    });
    fixture = TestBed.createComponent(EmployeformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
