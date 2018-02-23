import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { EditComponent } from '../components/edit/edit.component';

@Injectable()
export class CanDeactivateEditService implements CanDeactivate<EditComponent> {

  constructor() { }

  canDeactivate(component: EditComponent) {

    if (component.isChanged) {
      return confirm('Sei sicuro di voler uscire?');
    } else {
      return true;
    }

  }

}
