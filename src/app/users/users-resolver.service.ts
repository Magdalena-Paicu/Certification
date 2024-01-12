import { Injectable } from '@angular/core';
import { UsersService } from './users.service';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { User } from './user';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersResolverService implements Resolve<User[]> {
  constructor(private usersService: UsersService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<User[]> {
    return this.usersService.getUsers();
  }
}
