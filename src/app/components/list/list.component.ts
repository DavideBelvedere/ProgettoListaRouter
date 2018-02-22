import { Component, OnInit } from '@angular/core';
import { ListVideogame } from '../../services/list-videogame.service';
import { VideoGame } from '../../class/Videogame';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  videoGames: VideoGame[];
  constructor(private listVideogame: ListVideogame, private router: Router) {

  }

  ngOnInit() {
    this.videoGames = this.listVideogame.getVideogameList();
  }

  goToEdit(game: VideoGame){
    this.router.navigate(['/detail/'+game.$id]); //setta l'id quando si va nella pagina detail
  }

}
