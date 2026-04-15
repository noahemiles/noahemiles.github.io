import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenGymLandingPageComponent } from './open-gym-landing-page.component';

describe('OpenGymLandingPageComponent', () => {
  let component: OpenGymLandingPageComponent;
  let fixture: ComponentFixture<OpenGymLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenGymLandingPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpenGymLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
