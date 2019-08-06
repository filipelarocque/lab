import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashTreeComponent } from './dash-tree.component';

describe('DashTreeComponent', () => {
  let component: DashTreeComponent;
  let fixture: ComponentFixture<DashTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
