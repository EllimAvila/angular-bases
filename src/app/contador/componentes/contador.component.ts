import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  contador = 0;

  aumentar( cantidad:number){
    this.contador+=cantidad;
  }

  reducir( cantidad:number){
    this.contador-=cantidad;
  }

  resetear(){
    this.contador=10;
  }
}
