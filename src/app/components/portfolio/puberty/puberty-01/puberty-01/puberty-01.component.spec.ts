import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Puberty01Component } from './puberty-01.component';

describe('Puberty01Component', () => {
  let component: Puberty01Component;
  let fixture: ComponentFixture<Puberty01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Puberty01Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Puberty01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
