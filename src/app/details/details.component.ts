import { Component, inject } from '@angular/core';

import { ActivatedRoute, RouterLink } from '@angular/router';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

import { FormControl, FormGroup, ReactiveFormsModule

 } from '@angular/forms';
@Component({
    selector: 'app-details',
    imports: [RouterLink, ReactiveFormsModule],
    templateUrl: './details.component.html',
    styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  applyForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }


  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
