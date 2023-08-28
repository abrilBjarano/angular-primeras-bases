import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacters_Add: EventEmitter<Character> = new EventEmitter();


  public character: Character = {
    name: '',
    power: 0,
  }

  emitCharacter(): void {

    if( this.character.name.length === 0) {
      alert('No empty character is valid!');
      return;
    }

    this.onNewCharacters_Add.emit(this.character)

    this.character = { name: '', power: 0 };
  }

}
