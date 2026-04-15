import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenGymLoginPageComponent } from './open-gym-login-page.component';

describe('OpenGymLoginPageComponent', () => {
  let component: OpenGymLoginPageComponent;
  let fixture: ComponentFixture<OpenGymLoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenGymLoginPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpenGymLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
