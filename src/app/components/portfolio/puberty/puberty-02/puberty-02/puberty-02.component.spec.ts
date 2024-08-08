import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Puberty02Component } from './puberty-02.component';

describe('Puberty02Component', () => {
  let component: Puberty02Component;
  let fixture: ComponentFixture<Puberty02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Puberty02Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Puberty02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
