import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

    heroes: string[] = ['Sipderman','Ironman', 'Hulk', 'Thor','Yo'];
    //heroeBorrado: string | undefined= "";
    heroeBorrado: string = "";
    
    borrarHeroe() {
      console.log(this.heroeBorrado.length)
      this.heroeBorrado = 
      this.heroes.pop() || ''; //remueve del final, acá el doble pipe permite retornar '' si el valor es undefined
      //this.heroes.shift(); //remueve del inicio
      //this.heroes.splice(2,1); //remueve del elemento n, si no se indica el segundo parámetro borra de ahí en adelante
    
    }
}
