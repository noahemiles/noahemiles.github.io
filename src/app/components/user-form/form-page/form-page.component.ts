import { Component, inject } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { KeyValuePipe } from '@angular/common';
import { UserTileComponent } from '../user-tile/user-tile.component';
import { FormValidationService } from '../form-validation.service';

@Component({
  selector: 'app-form-page',
  imports: [KeyValuePipe, UserTileComponent],
  templateUrl: './form-page.component.html',
  styleUrl: './form-page.component.css',
})
export class FormPageComponent {
  protected errorMessage = '';
  private userService = inject(UserService);
  private validationService = inject(FormValidationService);

  protected users: Map<string, User> = this.userService.getUsers();

  public onSubmit() {
    // get form values
    const userNameField = document.getElementById('name') as HTMLInputElement;
    const userName = userNameField && userNameField.value;
    const userEmailField = document.getElementById('email') as HTMLInputElement;
    const userEmail = userEmailField && userEmailField.value;
    // validate values

    // add user to service
    if (this.validationService.validFields(undefined)) {
      const newUser: User = {
        id: crypto.randomUUID(),
        name: userName,
        email: userEmail
      };
      this.userService.addUser(newUser);
      this.errorMessage = "";
      userNameField.value = '';
      userEmailField.value = '';
    } else {
      this.errorMessage = "Name and Email are required fields.";
      setTimeout(() => {
        this.errorMessage = "";
      }, 5000);
    }
  }

}
