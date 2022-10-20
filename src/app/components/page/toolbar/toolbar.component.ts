import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
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

  constructor(
    private requestService: RequestService, 
    private authService: AuthService, 
    private router: Router) { }

  ngOnInit(): void {
    this.game$ = this.requestService.getGames();
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
