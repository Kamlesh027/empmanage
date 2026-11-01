import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAssComponent } from './project-ass.component';

describe('ProjectAssComponent', () => {
  let component: ProjectAssComponent;
  let fixture: ComponentFixture<ProjectAssComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectAssComponent]
    });
    fixture = TestBed.createComponent(ProjectAssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
