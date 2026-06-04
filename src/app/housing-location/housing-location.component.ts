import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { HousingLocation } from '../housing-location';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-housing-location',
    imports: [RouterLink],
    templateUrl: './housing-location.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
