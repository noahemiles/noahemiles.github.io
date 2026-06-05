import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { HousingLocation } from '../interfaces/housing-location';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-housing-location',
    imports: [RouterLink],
    templateUrl: './housing-location.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './housing-location.css'
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
