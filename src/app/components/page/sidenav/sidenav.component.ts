import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  genres$!: Observable<any>;

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.genres$ = this.requestService.getGenres()
  }

}
