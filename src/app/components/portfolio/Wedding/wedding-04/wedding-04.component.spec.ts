import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wedding04Component } from './wedding-04.component';

describe('Wedding04Component', () => {
  let component: Wedding04Component;
  let fixture: ComponentFixture<Wedding04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Wedding04Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Wedding04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
