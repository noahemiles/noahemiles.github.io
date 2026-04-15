import { Component } from '@angular/core';
import { OpenGymRegisterPageComponent } from '../open-gym-register-page/open-gym-register-page.component';
import { OpenGymLoginPageComponent } from '../open-gym-login-page/open-gym-login-page.component';
import { UserModel, User } from '../user';

@Component({
  selector: 'app-open-gym-landing-page',
  standalone: true,
  imports: [OpenGymRegisterPageComponent, OpenGymLoginPageComponent],
  templateUrl: './open-gym-landing-page.component.html',
  styleUrl: './open-gym-landing-page.component.css'
})


export class OpenGymLandingPageComponent {
  private loggedIn: boolean = false;
  private newUser: boolean = true;
  private user: UserModel | undefined;

  constructor() {
    if (localStorage['open_gym'] && localStorage['open_gym'].user) {
      this.user = localStorage['open_gym'].user;
    }
  }

  login() {
    this.loggedIn = true;
    this.newUser = false;
    this.user = new User();
  }
  logout() {
    this.loggedIn = false;
    this.user = undefined;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
  isNewUser() {
    return this.newUser;
  }
}
