import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  readonly email = 'noahemiles@gmail.com';
  readonly emailHref = 'mailto:noahemiles@gmail.com';
  readonly linkedInHref = 'https://www.linkedin.com/in/noah-e-miles/';
}
