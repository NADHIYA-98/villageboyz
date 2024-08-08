import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPortfolioComponent } from './footer-portfolio.component';

describe('FooterPortfolioComponent', () => {
  let component: FooterPortfolioComponent;
  let fixture: ComponentFixture<FooterPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterPortfolioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
