import { Component, Input, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  
  @Input()
  public showSideNav!: any;
  public name: string = 'gta';
  public game$!: Observable<any>;

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.game$ = this.requestService.getGames().pipe(
      tap(console.log) 
      
    )
  }

}
