import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UsersService } from '../users/users.service';

export const canActivateChildGuard: CanActivateFn = (route, state) => {
  return inject(UsersService).canActivateChild();
};
