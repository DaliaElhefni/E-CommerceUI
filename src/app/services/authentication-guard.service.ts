import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuardService implements CanActivate {

  constructor(public auth: AuthenticationService, public router: Router) { }
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate([`message`, {}]);
      setTimeout(() => {
        this.router.navigate([`login`, {}]);
      }, 3000)
      return false;
    }
    return true;
  }
}
