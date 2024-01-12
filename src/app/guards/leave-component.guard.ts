import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UsersService } from '../users/users.service';

export const leaveComponentGuard: CanActivateFn = (route, state): boolean => {
  return inject(UsersService).confirmLeave();
};
