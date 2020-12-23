import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomDecimalComponent } from './random-decimal.component';

describe('RandomDecimalComponent', () => {
  let component: RandomDecimalComponent;
  let fixture: ComponentFixture<RandomDecimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomDecimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomDecimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
