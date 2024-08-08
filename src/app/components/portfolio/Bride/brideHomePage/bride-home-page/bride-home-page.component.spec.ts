import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrideHomePageComponent } from './bride-home-page.component';

describe('BrideHomePageComponent', () => {
  let component: BrideHomePageComponent;
  let fixture: ComponentFixture<BrideHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrideHomePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrideHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
