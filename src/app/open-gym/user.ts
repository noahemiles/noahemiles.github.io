export interface UserModel {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
}

export class User implements UserModel {
    id: number = 0;
    firstName: string;
    lastName: string;
    email: string;
  
    // constructor(firstName: string = '', lastName: string = '', email: string = '') {
    constructor() {
      this.firstName = 'firstName';
      this.lastName = 'lastName';
      this.email = 'email';
    }
  }