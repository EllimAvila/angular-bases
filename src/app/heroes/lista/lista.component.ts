import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
 listaHeroes:string[]=['Ironman','Capitán América', 'Thor', 'Black Panther', 'Spiderman'];
 borrado?:string;

 borrarUltimoHeroe():void{
  this.borrado=this.listaHeroes.pop();
 }
 }

