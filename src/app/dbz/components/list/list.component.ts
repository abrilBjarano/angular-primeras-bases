import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
})
export class ListComponent {

  @Input()
  public charactersList: Character[] = [{
    id: '',
    name: '',
    power: 0
  }];


  // Emitir el ID de cada character para que el padre se suscriba ⬇️

  @Output()
  public onDelete_List: EventEmitter<string> = new EventEmitter();

  onDelete(id?: string): void {

    if( !id ) return;
    this.onDelete_List.emit(id);
  }

}
