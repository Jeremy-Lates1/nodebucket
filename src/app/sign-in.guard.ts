import { CanActivateFn } from '@angular/router';

export const signInGuard: CanActivateFn = (route, state) => {
  return true;
};
