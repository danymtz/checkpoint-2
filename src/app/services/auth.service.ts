import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private statusLogin!: boolean;

  constructor() { }

  login (username: string, password: string): boolean{

    if (username == 'danymtz' && password == 'dany123') return this.statusLogin = true;
    else return false
  }

  loginCheck (): boolean {
    return this.statusLogin;
  }
}
