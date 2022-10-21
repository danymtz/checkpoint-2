import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public correctData: boolean = true;

  ////////////////// FORMULARIO REACTIVO /////////////////
  public formLogin: FormGroup = new FormGroup({
    user: new FormControl('',[Validators.required]),
    pass: new FormControl('',[Validators.required])
  });
  
  constructor(private authservice: AuthService, private router: Router) { }

  ////////////// AL ENVIAR LA INFORMACIÓN /////////////////
  submit(): void {
    let usr: string = this.formLogin.get('user')?.value;        // Obtiene el nombre de usuario
    let pswd: string = this.formLogin.get('pass')?.value;       // Obtiene la contraseña del usuario

    if (this.correctData = this.authservice.login(usr,pswd)){   // Checa los datos con el Auth Service
      this.router.navigate(['games']);                          // Si son correctos redirigimos a /games
    } else this.correctData = false;

    console.log(this.correctData);
  }
}
