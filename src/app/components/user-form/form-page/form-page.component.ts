import { Component, inject } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { KeyValuePipe } from '@angular/common';
import { UserTileComponent } from '../user-tile/user-tile.component';

@Component({
  selector: 'app-form-page',
  imports: [KeyValuePipe, UserTileComponent],
  templateUrl: './form-page.component.html',
  styleUrl: './form-page.component.css',
})
export class FormPageComponent {
  protected errorMessage = '';
  private userService = inject(UserService);

  protected users: Map<string, User> = this.userService.getUsers();

  public onSubmit() {
    // get form values
    const userNameField = document.getElementById('user-name') as HTMLInputElement;
    const userName = userNameField && userNameField.value;
    const userEmailField = document.getElementById('user-email') as HTMLInputElement;
    const userEmail = userEmailField && userEmailField.value;
    // validate values

    // add user to service
    if (userNameField.value.length > 0 && userEmailField.value.length > 0) {
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
