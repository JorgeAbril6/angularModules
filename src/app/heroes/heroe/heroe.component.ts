import { Component } from "@angular/core";



@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
   nombre: string = 'ironman';
   edad: number = 45;
   obtenerNombre = (): string => {return `${this.nombre} - ${this.edad}`};
   cambiarNombre = ()=> this.nombre = 'Spiderman';
   cambiarEdad = ()=> this.edad = 92;
}