import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ProjectTileComponent } from './project-tile.component';

describe('ProjectTileComponent', () => {
  let component: ProjectTileComponent;
  let fixture: ComponentFixture<ProjectTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectTileComponent, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectTileComponent);
    component = fixture.componentInstance;
    component.projectDetails = { path: 'angular', title: 'Angular' };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
