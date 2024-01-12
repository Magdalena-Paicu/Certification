import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  users: User[] = [
    { id: 1, username: 'john_doe', email: 'john@example.com' },
    { id: 2, username: 'jane_smith', email: 'jane@example.com' },
    { id: 3, username: 'bob_jones', email: 'bob@example.com' },
    { id: 4, username: 'alice_smith', email: 'alice@example.com' },
    { id: 5, username: 'charlie_brown', email: 'charlie@example.com' },
    { id: 6, username: 'diana_miller', email: 'diana@example.com' },
    { id: 7, username: 'edward_johnson', email: 'edward@example.com' },
    { id: 8, username: 'fiona_clark', email: 'fiona@example.com' },
    { id: 9, username: 'george_wilson', email: 'george@example.com' },
    { id: 10, username: 'helen_martin', email: 'helen@example.com' },
  ];

  isLogin: boolean = true;
  canActivateChild(): boolean {
    return true;
  }

  confirmLeave() {
    return confirm('Are you sure that you want to leave the page? ');
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }
}
