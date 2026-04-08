import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectDetails } from '../project-details';

@Component({
  selector: 'app-project-tile',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project-tile.component.html',
  styleUrl: './project-tile.component.css'
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
