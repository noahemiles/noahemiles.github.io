import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { HousingLocationComponent } from '../housing-location/housing-location';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';
@Component({
    selector: 'app-home',
    imports: [HousingLocationComponent],
    templateUrl: './home.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './home.css'
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  filteredLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = JSON.parse(JSON.stringify(this.housingLocationList));
  }

  filterResults(filterValue: string) {
    filterValue = filterValue.toLowerCase();
    this.filteredLocationList = this.housingLocationList.filter((housingLocation: HousingLocation) => {
      return housingLocation.city.toLowerCase().indexOf(filterValue) > -1 || 
        housingLocation.state.toLowerCase().indexOf(filterValue) > -1 || 
        housingLocation.name.toLowerCase().indexOf(filterValue) > -1;
    });
  }
}
