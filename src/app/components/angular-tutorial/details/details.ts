import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { ActivatedRoute, RouterLink } from '@angular/router';
import { HousingLocation } from '../interfaces/housing-location';
import { HousingService } from '../services/housing.service';

import { FormControl, FormGroup, ReactiveFormsModule

 } from '@angular/forms';
@Component({
    selector: 'app-details',
    imports: [RouterLink, ReactiveFormsModule],
    templateUrl: './details.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './details.css'
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
