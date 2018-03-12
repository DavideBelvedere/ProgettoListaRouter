import { Component, OnInit } from '@angular/core';
import { ListVideogame } from '../../services/list-videogame.service';
import { VideoGame } from '../../class/Videogame';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Genere } from '../../class/Genere';
import { ListGeneresService } from '../../services/list-generes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  videoGames: VideoGame[];
  generes: Genere[];
  value: string="Tutti";
  constructor(private listVideogame: ListVideogame, private router: Router, private genereListService: ListGeneresService) {

  }

  ngOnInit() {
    this.videoGames = this.listVideogame.getVideogameList();
    this.generes = this.genereListService.getGeneresList();
  }

  goToEdit(game: VideoGame){
    this.router.navigate(['/detail/'+game.$id]); //setta l'id quando si va nella pagina detail
  }

 

}
