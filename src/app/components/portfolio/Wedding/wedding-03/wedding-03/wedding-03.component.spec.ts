import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wedding03Component } from './wedding-03.component';

describe('Wedding03Component', () => {
  let component: Wedding03Component;
  let fixture: ComponentFixture<Wedding03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Wedding03Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Wedding03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
