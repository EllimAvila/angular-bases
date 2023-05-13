import { Component } from "@angular/core";
import { DbzService } from "../services/dbz.service";
import { Personaje } from "../interfaces/personaje.interface";

@Component({
    selector:'app-dbz-main-page',
    templateUrl: 'main-page.component.html'
})

export class MainPageComponent{
    constructor(private dbzService: DbzService ){}
    get personajes() : Personaje[] {
        return this.dbzService.personajes;
    }

    onEliminarPersonaje(id:string):void{
        this.dbzService.eliminarPorId(id);
    }

    onNuevoPersonaje(personaje:Personaje):void{
        this.dbzService.registrarPersonaje(personaje);
    }
}