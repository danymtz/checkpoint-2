import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { RequestService } from 'src/app/services/request.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../page/dialog/dialog.component';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  games$!: Observable<any>;

  constructor (private requestService: RequestService, public dialog: MatDialog){ }

  ngOnInit(): void {    
    this.games$ = this.requestService.getGames().pipe(
      tap (console.log)
    )
  }

  openDialog(movie: any[]): void {
    this.dialog.open(DialogComponent, {data: movie});    
  }
}
