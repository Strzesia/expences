import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpencesEditFormComponent } from './expences-edit-form.component';

describe('ExpencesEditFormComponent', () => {
  let component: ExpencesEditFormComponent;
  let fixture: ComponentFixture<ExpencesEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpencesEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpencesEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
