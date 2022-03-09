import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroeEliminado?: string = '';
  heroes:string [] = ['Goku','Thor','Vegeta','Spiderman','luka'];

  BorrarHeroe = ()=> {const heroeBorrado = this.heroes.shift(); this.heroeEliminado = heroeBorrado}
}
