import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe', //app-nombre del componente sin la palabra component
    templateUrl: 'heroe.component.html'
})

export class  HeroeComponent{
    nombre: string = 'Ironman';
    edad  : number = 45;

    //getters y setters
    get nombreCapitalizado() {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string{
        return `${ this.nombre } - ${ this.edad }`;
    }

    cambiarNombre():void{
        this.nombre = 'Spiderman';
    }
    cambiarEdad():void{
        this.edad = 30;
    }

}
 