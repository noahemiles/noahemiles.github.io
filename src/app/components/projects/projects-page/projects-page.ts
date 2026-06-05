import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ProjectTileComponent } from "../project-tile/project-tile";

@Component({
    selector: 'app-projects-page',
    imports: [ProjectTileComponent],
    templateUrl: './projects-page.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './projects-page.css'
})
export class ProjectsPageComponent {

}
