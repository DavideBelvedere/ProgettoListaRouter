import { Component, OnInit } from '@angular/core';
import { VideoGame } from '../../class/Videogame';
import { ActivatedRoute, Router, NavigationStart, Data } from '@angular/router';
import { ListVideogame } from '../../services/list-videogame.service';
import { ListGeneresService } from '../../services/list-generes.service';
import { Genere } from '../../class/Genere';
import { FormBuilder, FormsModule, Validators, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  currentGame: VideoGame = new VideoGame();
  initialState: VideoGame = new VideoGame();
  generes: Genere[];
  searchBar: string = "";
  loadedFromDetail = false;
  isChanged = true;
  trovato = false;
  errore = false;
  data: string;
  initialData: string;
  editForm: FormGroup;

  constructor(private router: ActivatedRoute, private listVideogames: ListVideogame, private utilityRouter: Router, private genereListService: ListGeneresService, private fb: FormBuilder) {//ActivatedRoute rappresenta il route corrente


    this.router.params.subscribe(params => {
      if (params['id'] != '' && params['id'] != null) {
        this.currentGame = this.listVideogames.getGameById(params['id']);
        this.initGame();

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

  createForm() {
   
    this.editForm = this.fb.group({
      title: [this.currentGame.$title, Validators.required],
      price: [this.currentGame.$price, Validators.required],
      genere: ['', Validators.required],
      data: [this.data, Validators.required],
      rating: this.currentGame.$rating
    });
 
    this.editForm.patchValue({
      genere:[this.currentGame.$genere.$description,Validators.required]
    })
  }

  resetForm() {
    this.editForm = this.fb.group({
      title: [this.initialState.$title, Validators.required],
      price: [this.initialState.$price, Validators.required],
      genere: [this.initialState.$genere.$description, Validators.required],
      data: [this.initialData, Validators.required],
      rating: this.initialState.$rating
    });
  }

  ngOnInit() {

    if (this.loadedFromDetail && this.currentGame && this.currentGame.$title != "") {
      this.searchBar = this.currentGame.$title;
      this.trovato = true;
      this.createForm();
    }

    this.generes = this.genereListService.getGeneresList();




  }


  search() {
    if (this.searchBar && this.searchBar != "") {
      this.currentGame = this.listVideogames.search(this.searchBar);
      if (this.currentGame != null) {
        this.initGame();
        this.createForm();
        this.trovato = true;
        this.errore = false;
      } else {
        this.errore = true;
        this.trovato = false;
      }

    }
  }

  initGame() {
    this.initialState.changeValues(this.currentGame);
    this.data = this.currentGame.formatDate(this.currentGame.$data);
    this.initialData = this.data;
  }
  goToDetail() {
    this.utilityRouter.navigate(['/detail/' + this.currentGame.$id]); //setta l'id quando si va nella pagina detail
  }

  edit() {
    this.data=this.editForm.value.data;
    let workDate: Date = new Date(this.reverseFormatDate(new Date(this.data)));
    this.currentGame.$data = workDate;
    this.currentGame.$title=this.editForm.value.title;
    this.currentGame.$price=this.editForm.value.price;
    this.currentGame.$genere=this.editForm.value.genere;
    this.currentGame.$rating=this.editForm.value.rating;
    this.listVideogames.editData(this.currentGame);
    alert("modifiche applicate correttamente");
    this.goToDetail();
  }

  reverseFormatDate(date: Date) {

    let month = '' + (date.getMonth() + 1);
    let day = '' + date.getDate();
    let year = date.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [month, day, year].join('/');
  }


}
