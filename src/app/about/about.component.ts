import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  readonly careerStartYear = 2022;

  get yearsExperience(): number {
    return new Date().getFullYear() - this.careerStartYear;
  }
}
