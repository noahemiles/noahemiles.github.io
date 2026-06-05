import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-contact',
    imports: [],
    templateUrl: './contact.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './contact.css'
})
export class ContactComponent {
  readonly email = 'noahemiles@gmail.com';
  readonly emailHref = 'mailto:noahemiles@gmail.com';
  readonly linkedInHref = 'https://www.linkedin.com/in/noah-e-miles/';
}
