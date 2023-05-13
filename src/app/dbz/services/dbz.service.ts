import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/personaje.interface";
import { v4 as uuid } from 'uuid'

@Injectable({providedIn:'root'})

export class DbzService{

    personajes: Personaje[] = [
        {id:uuid(),nombre:'Goku',poder:10000},
        {id:uuid(),nombre:'Vegeta',poder:9999},
        {id:uuid(),nombre:'Bills',poder:9999999999}
    ];

    registrarPersonaje(personaje:Personaje):void{
        // console.log(personaje);
        const nuevoPersonaje:Personaje={id:uuid(), ...personaje}
        this.personajes.push(nuevoPersonaje);
    }

    // eliminarPersonaje(id:number){
    //     this.personajes.splice(id,1);
    //     // console.log(id);
    // }

    eliminarPorId(id:string){
        this.personajes=this.personajes.filter(personaje => personaje.id !== id);
    }
}