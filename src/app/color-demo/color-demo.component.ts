import { Component } from '@angular/core';

@Component({
  selector: 'app-color-demo',
  standalone: true,
  imports: [],
  templateUrl: './color-demo.component.html',
  styleUrl: './color-demo.component.css'
})
export class ColorDemoComponent {

  toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme");
    document.documentElement.setAttribute(
      "data-theme",
      current === "dark" ? "light" : "dark"
    );
  }
}
