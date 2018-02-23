import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoginService {
  user = "user";
  password = "password";
  private loginParam:Subject<boolean> = new Subject<boolean>();
  public loginParam$=this.loginParam.asObservable();

  constructor() { }

  login(user: string, pass: string): boolean {
    if (user == this.user && this.password == pass) {
      sessionStorage.setItem('user', user);
      sessionStorage.setItem('pass', pass);
      this.loginParam.next(true);
      return true;
    } else {
      return false;
    }
  }

  reset(){
    this.loginParam.next(false);
  }

  otherPage(){
    this.loginParam.next(true);
  }


}
