import { Component } from '@angular/core';

interface Disc {
  name: string;
  singer: string;
}

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
})
export class FormularioComponent {

  public disc: Disc = {
    name: '',
    singer: '',
  }

  emitDisc(): void {
    console.log(this.disc);

  }
}
