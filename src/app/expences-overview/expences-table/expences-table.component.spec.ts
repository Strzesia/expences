import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpencesTableComponent } from './expences-table.component';

describe('ExpencesTableComponent', () => {
  let component: ExpencesTableComponent;
  let fixture: ComponentFixture<ExpencesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpencesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpencesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
