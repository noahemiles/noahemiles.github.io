import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenGymComponent } from './open-gym.component';

describe('OpenGymComponent', () => {
  let component: OpenGymComponent;
  let fixture: ComponentFixture<OpenGymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenGymComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpenGymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
