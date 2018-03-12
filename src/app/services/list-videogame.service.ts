
import { Injectable } from "@angular/core";
import { VideoGame } from "../class/Videogame";
import { Genere } from "../class/Genere";
import { ListGeneresService } from "./list-generes.service";

@Injectable()
export class ListVideogame {
    private games: VideoGame[] = [new VideoGame("../assets/img/fifa18.jpg", "Fifa 18", 70, "1", this.listGeneres.getGenereById("2").clone(), 80, new Date("01/31/2017")),
    new VideoGame("../assets/img/fifa18.jpg", "Battelfield 4", 60, "2", this.listGeneres.getGenereById("4").clone(), 98, new Date("01/01/2012")),
    new VideoGame("../assets/img/fifa18.jpg", "God of war 4", 50, "3", this.listGeneres.getGenereById("4").clone(), 59, new Date("01/01/2013")),
    new VideoGame("../assets/img/fifa18.jpg", "Crash Bandicot", 30, "4", this.listGeneres.getGenereById("1").clone(), 100, new Date("01/01/2000")),
    new VideoGame("../assets/img/fifa18.jpg", "Gran Turismo", 130, "5", this.listGeneres.getGenereById("2").clone(), 85, new Date("01/01/2016")),
    new VideoGame("../assets/img/fifa18.jpg", "Destiny", 80, "6", this.listGeneres.getGenereById("4").clone(), 80, new Date("01/01/2015")),
    new VideoGame("../assets/img/fifa18.jpg", "Super Mario Bros", 25, "7", this.listGeneres.getGenereById("1").clone(), 25, new Date("01/01/2014")),
    new VideoGame("../assets/img/fifa18.jpg", "Sudoku", 5, "8", this.listGeneres.getGenereById("3").clone(), 76, new Date("01/01/2009")),
    new VideoGame("../assets/img/fifa18.jpg", "Parole Crociate", 1, "8", this.listGeneres.getGenereById("3").clone(), 64, new Date("01/01/2011")),
    new VideoGame("../assets/img/fifa18.jpg", "Skyrim", 70, "9", this.listGeneres.getGenereById("1").clone(), 100, new Date("01/01/2013")),
    new VideoGame("../assets/img/fifa18.jpg", "LOL", 15, "10", this.listGeneres.getGenereById("5").clone(), 89, new Date("01/01/2018")),
    new VideoGame("../assets/img/fifa18.jpg", "Minecraft", 1, "11", this.listGeneres.getGenereById("5").clone(), 54, new Date("01/01/2018"))
    ];

    constructor(private listGeneres: ListGeneresService) {

    }
    getVideogameList(): VideoGame[] {
        return this.games;
    }

    getGameById(id: string): VideoGame {
        for (let game of this.games) {
            if (game.$id == id) {
                return game.clone();
            }
        }
    }

    editData(videogame: VideoGame) {
        for (let game of this.games) {
            if (game.$id == videogame.$id) {
                game.changeValues(videogame);
            }
        }
    }

    isChanged(game: VideoGame): boolean {
        let id = game.$id;
        if (this.isEquivalent(game, this.getGameById(id))) {
            return false;
        } else {
            return true;
        }

    }

    isEquivalent(a, b) {
        // Create arrays of property names
        var aProps = Object.getOwnPropertyNames(a);
        var bProps = Object.getOwnPropertyNames(b);

        // If number of properties is different,
        // objects are not equivalent
        if (aProps.length != bProps.length) {
            return false;
        }

        for (var i = 0; i < aProps.length; i++) {
            var propName = aProps[i];

            // If values of same property are not equal,
            // objects are not equivalent
            if (a[propName] !== b[propName]) {
                return false;
            }
        }

        // If we made it this far, objects
        // are considered equivalent
        return true;
    }

    search(cercato: string): VideoGame {

        for (let game of this.games) {
            if (game.$title.toLowerCase() === cercato.toLocaleLowerCase()) {
                let trovato = true;
                let currentGame = this.getGameById(game.$id);

                return currentGame;
            }
        }
        return null;


    }

}