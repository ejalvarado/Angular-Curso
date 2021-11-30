import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        // esto es interno
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
    // lo que va aquí es visible afuera del módulo
        ListadoComponent
    ],
    imports: [
        //commonmodule contiene entre otras cosas las directivas de angular 
        CommonModule
    ]


})

export class HeroesModule {}