import { Component, Input } from '@angular/core';
import { ProjectDetails } from '../project-details';

@Component({
  selector: 'app-project-tile',
  standalone: true,
  imports: [],
  templateUrl: './project-tile.component.html',
  styleUrl: './project-tile.component.css'
})
export class ProjectTileComponent {
  @Input() projectDetails!: ProjectDetails;
}
