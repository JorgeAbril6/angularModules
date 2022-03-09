import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    template:  `
    <h1>Hola mundo</h1>

<button (click)="sumar()">+1</button>
<span>{{numero}}</span>
<button (click)="restar()">-1</button>

<br>
<br>
<br>

<button (click)="sumarB()">+5</button>
<span>{{base}}</span>
<button (click)="restarB()">-5</button>
    
    `
})

export class ContadorComponent{
    title = 'bases';
    numero: number = 0;
    base: number = 5;
      sumar = () => this.numero +=1;
      restar = () => this.numero -=1;
  
      
      sumarB= () => this.base +=5;
      restarB = () => this.base -=5;
}