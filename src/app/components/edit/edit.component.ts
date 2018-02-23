import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VideoGame } from '../../class/Videogame';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { ListVideogame } from '../../services/list-videogame.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  currentGame: VideoGame;
  searchBar: string = "";
  loadedFromDetail = false;
  isChanged = true;
  trovato = false;
  errore = false;
  constructor(private router: ActivatedRoute, private listVideogames: ListVideogame, private utilityRouter: Router) {//ActivatedRoute rappresenta il route corrente
    this.router.params.subscribe(params => {
      if (params['id'] != '' && params['id'] != null) {
        this.currentGame = this.listVideogames.getGameById(params['id']);
        this.loadedFromDetail = true;
      } else {
        this.loadedFromDetail = false;
      }
    });

    this.utilityRouter.events.subscribe(event => {
      if (event instanceof NavigationStart) {

        if (this.currentGame != undefined) {

          if (listVideogames.isChanged(this.currentGame)) {
            this.isChanged = true;
          } else {
            this.isChanged = false;
          }
        } else {
          this.isChanged = false;
        }
      }
    });
  }

  ngOnInit() {
    if (this.loadedFromDetail && this.currentGame && this.currentGame.$title != "") {
      this.searchBar = this.currentGame.$title;
      this.trovato = true;
    }
  }


  search() {
    if (this.searchBar && this.searchBar != "") {
      this.currentGame = this.listVideogames.search(this.searchBar);
      if (this.currentGame != null) {
        this.trovato = true;
        this.errore = false;
      } else {
        this.errore = true;
        this.trovato = false;
      }

    }
  }

  goToDetail() {
    this.utilityRouter.navigate(['/detail/' + this.currentGame.$id]); //setta l'id quando si va nella pagina detail
  }

  edit() {
    this.listVideogames.editData(this.currentGame);
    alert("modifiche applicate correttamente");
    this.goToDetail();

  }
  NavigationStart() {

  }
  ngOnDestroy() {

  }

}
