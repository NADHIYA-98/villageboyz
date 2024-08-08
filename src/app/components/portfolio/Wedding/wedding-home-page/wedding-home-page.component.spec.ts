import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingHomePageComponent } from './wedding-home-page.component';

describe('WeddingHomePageComponent', () => {
  let component: WeddingHomePageComponent;
  let fixture: ComponentFixture<WeddingHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeddingHomePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeddingHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
