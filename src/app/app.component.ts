import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  private login = false;
  constructor(private loginService: LoginService) {

    this.loginService.loginParam$.subscribe((login: boolean) => {
      this.login = login;
    });
  }
  ngOnInit() {
    this.login = this.loginService.isLogged();
  }

  title = 'app';
}
