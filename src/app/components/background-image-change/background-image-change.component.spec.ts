import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundImageChangeComponent } from './background-image-change.component';

describe('BackgroundImageChangeComponent', () => {
  let component: BackgroundImageChangeComponent;
  let fixture: ComponentFixture<BackgroundImageChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BackgroundImageChangeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BackgroundImageChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
