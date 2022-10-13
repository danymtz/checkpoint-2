import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private API: string = 'https://api.rawg.io/api/games';
  private token: string = '?key=d414a931adcb4360aa5f521c9036f040';
  private pages: string = `&page_size=11` 

  constructor(private httpClient: HttpClient) { }

  getGames(){ 
    return this.httpClient.get(this.API+this.token+this.pages).pipe(
      map((response: any) => {
        return response.results
      })
    ); 
  } 
}
