import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  block: boolean = false;

  constructor (private authService: AuthService, private router: Router){}

  canActivate(): boolean {
    
    if (!(this.block=this.authService.loginCheck())) {
      this.router.navigate(['login']);
      return this.block;
    } else return true
      
  }
}
