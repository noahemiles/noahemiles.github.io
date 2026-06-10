import { Service, PLATFORM_ID, inject } from '@angular/core';
import { User } from './user';
import { isPlatformBrowser } from '@angular/common';

@Service()
export class UserService {
  private users: Map<string, User> = new Map();
  platformId = inject(PLATFORM_ID);
  loadData() {
    if (isPlatformBrowser(this.platformId)) {
      const lsUsers = localStorage.getItem('nm-users');
      
      if (lsUsers) {
        console.log(lsUsers);
        const parsedUsers = JSON.parse(lsUsers);
        const hydratedUsers = parsedUsers.map(([id, rawUserData]: [string, User]) => {
          const user: User = {
            id: rawUserData.id,
            name: rawUserData.name,
            email: rawUserData.email
          }
          return [id, user];
        });
        this.users = new Map(hydratedUsers);
      }
    }
  }

  public getUsers(): Map<string, User> {
    return this.users;
  }
  public getUser(userId: string): User | undefined{
    return this.users.get(userId);
  }

  public updateUser(user: User): boolean {
    const userId = user.id;
    let success = false;
    if (this.users.has(userId)) {
        this.users.set(userId, user);
        success = true;
        this.updateStorage();
    }
    return success;
  }

  public addUser(user: User): void {
    this.users.set(user.id, user);
    this.updateStorage();
  }

  public deleteUser(userId: string) {
    this.users.delete(userId);
    this.updateStorage();
  }

  public updateStorage() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('nm-users', JSON.stringify([...this.users.entries()]));
    }
  }
}
