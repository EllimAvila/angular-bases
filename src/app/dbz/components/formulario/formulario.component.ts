import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-dbz-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter;

  personaje:Personaje = {
    nombre:'',
    poder:0
  }

  emitirPersonaje():void{
    if(this.personaje.nombre.length<1) return;

    this.onNuevoPersonaje.emit(this.personaje);
    // console.log(this.personaje);
    this.personaje={nombre:'',poder:0}
  }
}
