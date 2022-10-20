import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {

  public games$!: Observable<any>; // Juegos obtenidos del sidenav        

  constructor () {  }

}
