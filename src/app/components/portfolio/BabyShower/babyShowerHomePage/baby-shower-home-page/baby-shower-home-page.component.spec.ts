import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyShowerHomePageComponent } from './baby-shower-home-page.component';

describe('BabyShowerHomePageComponent', () => {
  let component: BabyShowerHomePageComponent;
  let fixture: ComponentFixture<BabyShowerHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BabyShowerHomePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BabyShowerHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
