import { Component, OnInit } from '@angular/core';
import { ListVideogame } from '../../services/list-videogame.service';
import { VideoGame } from '../../class/Videogame';
import { Router } from '@angular/router';
import { Genere } from '../../class/Genere';
import { ListGeneresService } from '../../services/list-generes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  videoGames: VideoGame[];
  videoGamesFiltered: VideoGame[];
  generes: Genere[];
  value: string = "Tutti";
  constructor(private listVideogame: ListVideogame, private router: Router, private genereListService: ListGeneresService) {

  }

  ngOnInit() {
    this.videoGames = this.listVideogame.getVideogameList();
    this.generes = this.genereListService.getGeneresList();
    this.videoGamesFiltered = this.videoGames;
  }

  goToEdit(game: VideoGame) {
    this.router.navigate(['/detail/' + game.$id]); //setta l'id quando si va nella pagina detail
  }

  filter() {
    alert('son dentro');
    if (this.value != 'Tutti') {
      this.videoGamesFiltered = [];
      for (let game of this.videoGames) {
        if (this.genereListService.getGenereById(game.$genere.$id).$description == this.value) {
          this.videoGamesFiltered.push(game);
        }
      }
    } else {
      this.videoGamesFiltered = this.videoGames;
    }

  }


}
