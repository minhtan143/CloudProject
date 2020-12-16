import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomIntegerComponent } from './random-integer.component';

describe('RandomIntegerComponent', () => {
  let component: RandomIntegerComponent;
  let fixture: ComponentFixture<RandomIntegerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomIntegerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomIntegerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
