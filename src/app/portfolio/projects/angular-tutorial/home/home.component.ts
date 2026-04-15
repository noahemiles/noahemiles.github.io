import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../models/housing-location';
import { HousingService } from '../services/housing.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
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
