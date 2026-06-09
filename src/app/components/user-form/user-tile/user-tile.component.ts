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

  resetForm() {
    this.updateForm(this.user);
    this.toggleEdit();
  }

  saveChanges() {
    const nameField = document.getElementById(`${this.user?.id}-name`) as HTMLInputElement;
    const emailField = document.getElementById(`${this.user?.id}-email`) as HTMLInputElement;
    this.user!.name = nameField.value;
    this.user!.email = emailField.value;
    this.userService.updateUser(this.user ?? this.emptyUser);
    this.toggleEdit();
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
    this.userService.deleteUser(userId);
  }
}
