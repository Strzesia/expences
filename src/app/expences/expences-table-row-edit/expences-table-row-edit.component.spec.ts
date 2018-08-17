import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpencesTableRowEditComponent } from './expences-table-row-edit.component';

describe('ExpencesTableRowEditComponent', () => {
  let component: ExpencesTableRowEditComponent;
  let fixture: ComponentFixture<ExpencesTableRowEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpencesTableRowEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpencesTableRowEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
