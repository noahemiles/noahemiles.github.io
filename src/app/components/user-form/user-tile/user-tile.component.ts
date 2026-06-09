import { Component, inject, Input } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-tile',
  imports: [],
  templateUrl: './user-tile.component.html',
  styleUrl: './user-tile.component.css',
})
export class UserTileComponent {
  protected editing: boolean = false;

  protected userService = inject(UserService);

  @Input() id: string = '';
  protected user: User | undefined;
  private emptyUser: User = { id: "", name: "", email: ""};
  ngOnInit() {
    console.log("Constructor ID: ", this.id);
    this.user = this.userService.getUser(this.id);
  }

  toggleEdit(): void {
    this.editing = !this.editing;
  }

  cancelEdit() {
    if (this.userInfoHasChanged()) {
      if (confirm("You have unsaved changes. Continue?")) {
        this.resetForm();
      }
    } else {
      this.toggleEdit();
    }
  }

  resetForm() {
    this.updateForm(this.user);
    this.toggleEdit();
  }

  saveChanges() {
    const hasChanged = this.userInfoHasChanged();
    const validFields = this.validFields();
    if (validFields && hasChanged) {
      const nameField = document.getElementById(`${this.user!.id}-name`) as HTMLInputElement;
      const emailField = document.getElementById(`${this.user!.id}-email`) as HTMLInputElement;
      this.user!.name = nameField.value;
      this.user!.email = emailField.value;
      this.userService.updateUser(this.user ?? this.emptyUser);
      this.toggleEdit();
    } else {
      alert("Invalid");
    }
  }

  updateForm(user: User | undefined): void {
    if (!user) {
      user = this.emptyUser;
    }
    const nameField = document.getElementById(`${user.id}-name`) as HTMLInputElement;
    const emailField = document.getElementById(`${user.id}-email`) as HTMLInputElement;
    nameField.value = user.name;
    emailField.value = user.email;
  }

  deleteUser(userId: string) {
    if (confirm("Delete User?")) {
      this.userService.deleteUser(userId);
    }
  }

  userInfoHasChanged(): boolean {
    const nameField = document.getElementById(`${this.user?.id}-name`) as HTMLInputElement;
    const emailField = document.getElementById(`${this.user?.id}-email`) as HTMLInputElement;
    let changed = false;
    const currentUserName = this.user?.name;  
    const currentUserEmail = this.user?.email;

    if (nameField.value != currentUserName || emailField.value != currentUserEmail) {
      changed = true;
    }

    return changed;
  }


  // TODO: MOVE into service
  validFields(): boolean {
    const nameField = document.getElementById(`${this.user?.id}-name`) as HTMLInputElement;
    const emailField = document.getElementById(`${this.user?.id}-email`) as HTMLInputElement;

    return this.validName(nameField.value) && this.validEmail(emailField.value);
  }

  validName(name: string): boolean {
    let valid = true;
    if (name.length == 0) {
      valid = false;
    }
    return valid;
  }
  validEmail(email: string): boolean {
    let valid = true;
    if (email.length == 0 || email.indexOf("@") == -1) {
      valid = false;
    }
    return valid;
  }
}
