import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { User } from '../Models/user.model';
import { UsersService } from './users.service';
import { CookieService } from 'ngx-cookie-service';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationRoleGuardService implements CanActivate {

  constructor(public auth: AuthenticationService, public router: Router, private _userService: UsersService , private cookie : CookieService) { }
  canActivate(): boolean {
    if (this.auth.isAuthenticated() && this.isUserAdmin()) {
      return true;
    }
    else if (this.auth.isAuthenticated()) {
      this.router.navigate([`message`, {}]);
      setTimeout(() => {
        this.router.navigate([`home`, {}]);
      }, 3000);
      return false;
    }
    this.router.navigate([`message`, {}]);
    setTimeout(() => {
      this.router.navigate([`login`, {}]);
    }, 3000);
    return false;
  }

  isUserAdmin(): boolean{
    let token = this.cookie.get('token');
    const tokenPayload = decode(token);
    if(tokenPayload.role === "admin"){
      return true;
    }
    return false;
  }
}
