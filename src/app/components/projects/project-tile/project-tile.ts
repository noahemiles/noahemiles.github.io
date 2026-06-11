import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProjectDetails } from '../interfaces/project-details';

@Component({
  selector: 'app-project-tile',
  imports: [RouterLink, CommonModule],
  templateUrl: './project-tile.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './project-tile.css',
})
export class ProjectTileComponent {
  @Input() projectDetails!: ProjectDetails;

  get routerLinkPath(): string[] {
    const raw = this.projectDetails.path;
    const path = typeof raw === 'string' ? raw : String(raw);
    const trimmed = path.replace(/^\//, '');
    return ['/', trimmed];
  }
}
