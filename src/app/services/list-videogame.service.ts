
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
                return game.clone();
            }
        }
    }

    editData(videogame: VideoGame) {
        for (let game of this.games) {
            if (game.$id == videogame.$id) {
                game = videogame;
                console.log(JSON.stringify(game));
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

}