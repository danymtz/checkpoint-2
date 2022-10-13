import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { RequestService } from './services/request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'games-dany';
}
