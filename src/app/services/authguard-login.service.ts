import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable()
export class AuthguardLoginService implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) { }
  canActivate() {
    if (this.loginService.isLogged()) {
      this.router.navigate(["/home"]);
      return false;
    } else {

      return true;
    }
  }



}
