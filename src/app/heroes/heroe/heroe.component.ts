import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
  nombre:string = 'capitán américa';
  edad:number = 90;

  get nombreMayusculas(): string{
    return this.nombre.toUpperCase();
  }

  descripcionHeroe():string{
    // return this.nombreMayusculas+' '+this.edad.toString();
    return `${this.nombreMayusculas} - ${this.edad}`;
  }

  cambiarNombre(nombre:string){
    this.nombre=nombre;
  }

  cambiarEdad(edad:number){
    this.edad=edad;
  }

  reestablecer(){
    this.nombre='capitán américa';
    this.edad=90;
  }
}
