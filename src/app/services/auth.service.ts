import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private statusLogin!: boolean;

  constructor() { }

  login (username: string, password: string): boolean{
    
    if (username == 'danymtz' && password == 'dany123') {
      localStorage.setItem('auth', 'true');
      return this.statusLogin = true;
    }
    else return false
  }

  loginCheck (): boolean {
    this.statusLogin = (localStorage.getItem('auth'))==="true";
    return this.statusLogin;
  }

  logout (): void {
    localStorage.setItem('auth', 'false');
  }
}
