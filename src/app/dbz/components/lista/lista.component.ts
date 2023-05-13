import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-dbz-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  // @Output() onEliminarPersonaje: EventEmitter<number> = new EventEmitter;
  @Output() onEliminarPersonajeId: EventEmitter<string> = new EventEmitter;

  @Input() listaPersonajes: Personaje[] = [{
    nombre:'Piccoro',
    poder:8000
  }]

  // emitirEliminacion(id:number):void{
  //   // console.log(id);
  //   this.onEliminarPersonaje.emit(id);
  // }
  emitirEliminacionId(id:string):void{
    this.onEliminarPersonajeId.emit(id);
  }
}
