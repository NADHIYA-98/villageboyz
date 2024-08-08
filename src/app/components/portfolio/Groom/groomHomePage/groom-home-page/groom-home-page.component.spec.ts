import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroomHomePageComponent } from './groom-home-page.component';

describe('GroomHomePageComponent', () => {
  let component: GroomHomePageComponent;
  let fixture: ComponentFixture<GroomHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroomHomePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroomHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
