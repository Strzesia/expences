import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpencesTableRowComponent } from './expences-table-row.component';

describe('ExpencesTableRowComponent', () => {
  let component: ExpencesTableRowComponent;
  let fixture: ComponentFixture<ExpencesTableRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpencesTableRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpencesTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
