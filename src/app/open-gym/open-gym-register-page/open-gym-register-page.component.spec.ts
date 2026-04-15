import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenGymRegisterPageComponent } from './open-gym-register-page.component';

describe('OpenGymRegisterPageComponent', () => {
  let component: OpenGymRegisterPageComponent;
  let fixture: ComponentFixture<OpenGymRegisterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenGymRegisterPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpenGymRegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
