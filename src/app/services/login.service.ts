import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
  user = "user";
  password = "password";
  private loginParam: Subject<boolean> = new Subject<boolean>();
  public loginParam$ = this.loginParam.asObservable();

  constructor(private router: Router) {



  }

  login(user: string, pass: string): boolean {
    if (user == this.user && this.password == pass) {
      sessionStorage.setItem('user', user);
      this.loginParam.next(true);
      return true;
    } else {
      return false;
    }
  }

  reset() {
    this.loginParam.next(false);
  }

  otherPage() {
    this.loginParam.next(true);
  }

  logout() {
    this.reset();
    sessionStorage.removeItem('user');
    this.router.navigate(["/login"]);

  }

  isLogged(): boolean {
    if (sessionStorage.getItem('user') === null) {
      return false;
    } else {
      return true;
    }
  }
}
