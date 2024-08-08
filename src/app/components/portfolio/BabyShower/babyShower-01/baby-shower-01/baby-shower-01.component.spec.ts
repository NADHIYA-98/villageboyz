import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyShower01Component } from './baby-shower-01.component';

describe('BabyShower01Component', () => {
  let component: BabyShower01Component;
  let fixture: ComponentFixture<BabyShower01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BabyShower01Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BabyShower01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
