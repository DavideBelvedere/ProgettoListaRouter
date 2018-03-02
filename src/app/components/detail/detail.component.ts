import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListVideogame } from '../../services/list-videogame.service';
import { VideoGame } from '../../class/Videogame';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  currentGame: VideoGame;
  isAnAdmin: boolean;
  constructor(private loginService:LoginService,private router: ActivatedRoute, private listVideogames: ListVideogame,private utilityRouter: Router) {//ActivatedRoute rappresenta il route corrente
    this.router.params.subscribe(params => {//
      if (params['id'] != '' && params['id'] != null) {
        this.currentGame = this.listVideogames.getGameById(params['id']);
      }
    });
  }
  backList(){
    this.utilityRouter.navigate(['/list']);
  }
  goToEdit(){
    this.utilityRouter.navigate(['/edit/'+this.currentGame.$id]); //setta l'id quando si va nella pagina detail
  }

  ngOnInit(){
    this.isAnAdmin=this.loginService.isAdmin(this.loginService.getCurrentUser());
  }

  

}
