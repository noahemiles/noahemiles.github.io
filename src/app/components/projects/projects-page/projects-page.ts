import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ProjectTileComponent } from '../project-tile/project-tile';
import { BracketsIcon, GithubIcon } from '../../icons/icons/icons.component';

@Component({
  selector: 'app-projects-page',
  imports: [ProjectTileComponent, BracketsIcon, GithubIcon],
  templateUrl: './projects-page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './projects-page.css',
})
export class ProjectsPageComponent {}
