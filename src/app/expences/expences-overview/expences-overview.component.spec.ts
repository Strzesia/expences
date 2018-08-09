import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpencesOverviewComponent } from './expences-overview.component';

describe('ExpencesOverviewComponent', () => {
  let component: ExpencesOverviewComponent;
  let fixture: ComponentFixture<ExpencesOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpencesOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpencesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
