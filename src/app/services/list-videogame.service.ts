
import { Injectable } from "@angular/core";
import { VideoGame } from "../class/Videogame";

@Injectable()
export class ListVideogame {
    private games: VideoGame[] = [new VideoGame("../assets/img/fifa18.jpg", "Fifa 18", 70, "1", "sport", 80, 2017),
    new VideoGame("../assets/img/fifa18.jpg", "Battelfield 4", 60, "2", "guerra", 98, 2016),
    new VideoGame("../assets/img/fifa18.jpg", "God of war 4", 50, "3", "guerra", 59, 2018),
    new VideoGame("../assets/img/fifa18.jpg", "Crash Bandicot", 30, "4", "guerra", 100, 2010)];

    constructor() {

    }
    getVideogameList(): VideoGame[] {
        return this.games;
    }
    
    getGameById(id: string): VideoGame {
        for (let game of this.games) {
            if (game.$id == id) {
                return game;
            }
        }
    }

    editData(videogame: VideoGame) {
        for (let game of this.games) {
            if (game.$id == videogame.$id) {
                game=videogame;

            }
        }
    }
}