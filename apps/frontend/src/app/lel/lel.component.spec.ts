import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LelComponent } from './lel.component';

describe('LelComponent', () => {
  let component: LelComponent;
  let fixture: ComponentFixture<LelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
