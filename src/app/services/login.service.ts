import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { ListUserService } from './list-user.service';
import { User } from '../class/User';

@Injectable()
export class LoginService {

  private loginParam: Subject<boolean> = new Subject<boolean>();
  public loginParam$ = this.loginParam.asObservable();

  constructor(private router: Router, private userService: ListUserService) {



  }

  login(user: string, pass: string): boolean {

    return this.userService.login(user, pass);
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

  getCurrentUser():User{
  
    if (sessionStorage.getItem('user') === null) {
      return null;
    } else {
      return JSON.parse(sessionStorage.getItem('user')) as User;
    }
     
  }

  isAdmin(user:User):boolean{
    if (user.tipo == 'admin') {
      return true;
    } else {
      return false;
    }
  }

}
