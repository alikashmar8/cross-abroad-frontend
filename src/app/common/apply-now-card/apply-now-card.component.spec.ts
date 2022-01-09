import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyNowCardComponent } from './apply-now-card.component';

describe('ApplyNowCardComponent', () => {
  let component: ApplyNowCardComponent;
  let fixture: ComponentFixture<ApplyNowCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyNowCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyNowCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
