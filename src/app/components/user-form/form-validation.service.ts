import { Service } from '@angular/core';
import { User } from './user';

@Service()
export class FormValidationService {
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
  
  validFields(user: User | undefined): boolean {
    const nameField = document.getElementById(`${user?.id ? user.id + '-' : ''}name`) as HTMLInputElement;
    const emailField = document.getElementById(`${user?.id ? user.id + '-' : ''}email`) as HTMLInputElement;

    return this.validName(nameField.value) && this.validEmail(emailField.value);
  }
}
