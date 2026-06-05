import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-about',
    imports: [],
    templateUrl: './about.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './about.css'
})
export class AboutComponent {
  readonly careerStartYear = 2022;

  get yearsExperience(): number {
    return new Date().getFullYear() - this.careerStartYear;
  }
}
