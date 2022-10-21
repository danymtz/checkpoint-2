import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RequestService } from 'src/app/services/request.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  private genre!: number;

  @Input()
  public games$!: Observable<any>;                                    // Juegos obtenidos del sidenav

  constructor(public dialog: MatDialog, 
    private activateRoute: ActivatedRoute, 
    private requestService: RequestService) { }

  ngOnInit(): void {
    this.genre = this.activateRoute.snapshot.data['genre'];           // Si el usuario actualiza: obtenenemos el ID de nuevo
    if (this.genre == undefined)                                      // Si no está definido 
      this.genre = 4;
    
    this.games$ = this.requestService.getGamesbyGenre(this.genre);    // Carga un género por defecto (Acción)
  }

  ////////////////// LLAMADA AL MODAL //////////////////
  openDialog(objectReceive: any[]): void {
    this.dialog.open(DialogComponent, {data: objectReceive});    
  }
}
