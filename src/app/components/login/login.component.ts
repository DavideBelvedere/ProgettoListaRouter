import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { User } from '../../class/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: string;
  pass: string;

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.loginService.otherPage();
  }

  login() {
    if (this.loginService.login(this.user, this.pass)) {
      this.router.navigate(["/home"]);
    } else {
      alert('login non eseguito controlla username e password');
    }
  }
  
}
