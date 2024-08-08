import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wedding02Component } from './wedding-02.component';

describe('Wedding02Component', () => {
  let component: Wedding02Component;
  let fixture: ComponentFixture<Wedding02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Wedding02Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Wedding02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
