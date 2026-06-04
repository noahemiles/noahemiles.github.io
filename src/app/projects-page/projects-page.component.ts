import { Component } from '@angular/core';
import { ProjectTileComponent } from "../project-tile/project-tile.component";

@Component({
    selector: 'app-projects-page',
    imports: [ProjectTileComponent],
    templateUrl: './projects-page.component.html',
    styleUrl: './projects-page.component.css'
})
export class ProjectsPageComponent {

}
