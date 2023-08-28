import { NgModule } from '@angular/core';

import { FormularioComponent } from './formulario.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';




@NgModule({
  exports: [
    FormularioComponent
  ],
  declarations: [
    FormularioComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class FormularioModule { }


