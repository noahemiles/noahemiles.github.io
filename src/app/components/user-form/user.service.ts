import { Service } from '@angular/core';
import { User } from './user';

@Service()
export class UserService {
  private users = new Map<string, User>();

  public getUsers(): Map<string, User> {
    return this.users;
  }
  public getUser(userId: string): User | undefined{
    console.log("GETUSER: ", userId);
    console.log("GETUSER: ", this.users);
    return this.users.get(userId);
  }

  public updateUser(user: User): boolean {
    const userId = user.id;
    let success = false;
    if (this.users.has(userId)) {
        this.users.set(userId, user);
        success = true;
    }
    return success;
  }

  public addUser(user: User): void {
    this.users.set(user.id, user);
    console.log(this.users);
  }

  public deleteUser(userId: string) {
    this.users.delete(userId);
  }
}
