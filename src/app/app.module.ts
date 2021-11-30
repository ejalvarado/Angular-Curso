import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// de la tareaimport * as contadorComponent from './contador/contador/contador.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';

//Tarea:

//Crear un módulo llamado ContadorModule
//hacer las declaraciones y exportaciones para que el app siga funcionando

//En declarations se adiciona los componentes propios
@NgModule({
  declarations: [
    AppComponent, 
    // tarea contadorComponent.ContadorComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule, //se debe importar el módulo y luego no se requiere cambiar este archivo.
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
