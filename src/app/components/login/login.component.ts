import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

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
    
    if(sessionStorage.getItem('user')===null){
      this.loginService.reset();
    }else{
      this.router.navigate(['/home']);
    }
   
  }

  ngOnDestroy(){
    this.loginService.otherPage();
  }

  login() {
    if (this.loginService.login(this.user, this.pass)) {
      alert('login eseguito correttamente');
      this.router.navigate(["/home"]);
    } else {
      alert('login non eseguito controlla username e password');
    }
  }

  

 

}
