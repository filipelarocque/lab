import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorTreeComponent } from './indicator-tree.component';

describe('IndicatorTreeComponent', () => {
  let component: IndicatorTreeComponent;
  let fixture: ComponentFixture<IndicatorTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicatorTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
