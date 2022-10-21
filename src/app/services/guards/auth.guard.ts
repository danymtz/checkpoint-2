import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (private authService: AuthService, private router: Router){}

  canActivate(): boolean {
    
    if (!this.authService.loginCheck()) {         // Si el usuario NO(!) está logeado (false)
      this.router.navigate(['login']);            // Redirige al login
      return false                                // (false) Niega el acceso a la ruta               
    } else return true                            // (true) Permite el acceso a la ruta
  }
}
