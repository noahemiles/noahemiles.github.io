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
    const newUser: User = {
      id: crypto.randomUUID(),
      name: userName,
      email: userEmail
    };
    this.userService.addUser(newUser);
  }

}
