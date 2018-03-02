import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { User } from '../../class/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private currentUser: User = new User("", "", "");
  private isAnAdmin;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.currentUser = this.loginService.getCurrentUser();
    this.isAnAdmin = this.loginService.isAdmin(this.currentUser);
  }

  logout() {
    this.loginService.logout();
  }

}
