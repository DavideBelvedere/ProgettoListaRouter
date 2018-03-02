import { Injectable } from '@angular/core';
import { Genere } from '../class/Genere';

@Injectable()
export class ListGeneresService {
  private generes: Genere[] = [new Genere("1", "avventura"),
  new Genere("2", "sport"),
  new Genere("3", "rompicapo"),
  new Genere("4", "guerra"),
  new Genere("5", "rpg")];
  constructor() { }

  getGeneresList(): Genere[] {
      return this.generes;
  }

  getGenereById(id: string): Genere {
    for (let genere of this.generes) {
      if (genere.$id == id) {
        return genere.clone();
      }
    }
  }
  getDescriptionById(id: string): string {
    for (let genere of this.generes) {
      if (genere.$id == id) {
        return genere.$description;
      }
    }
  }
}
