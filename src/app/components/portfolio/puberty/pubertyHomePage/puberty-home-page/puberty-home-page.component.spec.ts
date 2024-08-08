import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubertyHomePageComponent } from './puberty-home-page.component';

describe('PubertyHomePageComponent', () => {
  let component: PubertyHomePageComponent;
  let fixture: ComponentFixture<PubertyHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PubertyHomePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PubertyHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
