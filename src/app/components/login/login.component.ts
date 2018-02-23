import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: string;
  pass: string;

  constructor(private loginService: LoginService) { 
 }

  ngOnInit() {
    this.loginService.reset();
    //alert("username: user, password: pass");
  }
  
  ngOnDestroy(){
    this.loginService.otherPage();
  }

  login() {
    if (this.loginService.login(this.user, this.pass)) {
      alert('login eseguito correttamente');
    } else {
      alert('login non eseguito controlla username e password');
    }
  }

 

}
