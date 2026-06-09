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
    }
  }

  resetForm() {
    this.updateForm(this.user);
    this.toggleEdit();
  }

  saveChanges() {
    const nameField = document.getElementById(`${this.user?.id}-name`) as HTMLInputElement;
    const emailField = document.getElementById(`${this.user?.id}-email`) as HTMLInputElement;
    let changed = false;
    if (!((nameField.value && nameField.value.length == 0) || (emailField.value && emailField.value.length == 0))) {
      if (nameField.value && this.user!.name != nameField.value) {
        this.user!.name = nameField.value;
        changed = true;
      }
      if (emailField.value && this.user!.email != emailField.value) {
        this.user!.email = emailField.value;
        changed = true;
      }
      if (changed) {
        this.userService.updateUser(this.user ?? this.emptyUser);
      }
      this.toggleEdit();
    } else {
      this.resetForm();
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
}
