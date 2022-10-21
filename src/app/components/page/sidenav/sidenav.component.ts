import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { map, Observable } from 'rxjs';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidenavComponent implements OnInit {

  genres$!: Observable<any>;                                // Generos
  games$!: Observable<any>;                                 // Juegos

  @Output()
  propagar = new EventEmitter<any>();                       // Para propagar los juegos

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.genres$ = this.requestService.getGenres();         // Obtener los géneros
  }

  showGenre(genre: number){                                     // Recibe Id del juego que selecciona el usuario
    this.games$ = this.requestService.getGamesbyGenre(genre);   // Petición de los juegos por genero
    this.propagar.emit(this.games$);                            // Propagación de los juegos a otro componente
  }
}
