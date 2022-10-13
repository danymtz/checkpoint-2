import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public correctData: boolean = true;

  public formLogin: FormGroup = new FormGroup({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
  });
  
  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  submit(): void {
    let usr: string = this.formLogin.get('username')?.value;
    let pswd: string = this.formLogin.get('password')?.value;    

    if (this.correctData = this.authservice.login(usr,pswd)){
      this.router.navigate(['games']);
    } else this.correctData = false;

    console.log(this.correctData);
  }
}
