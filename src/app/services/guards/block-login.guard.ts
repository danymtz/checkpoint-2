import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class BlockLoginGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router){}

  canActivate(): boolean {
    
      if (this.authService.loginCheck() == true){   // Si el usuario está logeado (true)
        this.router.navigate(['games']);            // Redirigimos a la ruta /games
        return false                                // Denagamos el acceso a la ruta login (false)
      }
      else return true                              // Con true validamos el acceso al login
  }
}
