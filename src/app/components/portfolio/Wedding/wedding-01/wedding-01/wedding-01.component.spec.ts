import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wedding01Component } from './wedding-01.component';

describe('Wedding01Component', () => {
  let component: Wedding01Component;
  let fixture: ComponentFixture<Wedding01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Wedding01Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Wedding01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
