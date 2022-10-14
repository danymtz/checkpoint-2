import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private games: string = 'https://api.rawg.io/api/games';
  private genres: string = 'https://api.rawg.io/api/genres';
  private token: string = '?key=d414a931adcb4360aa5f521c9036f040';
  private pages: string = `&page_size=25` 

  constructor(private httpClient: HttpClient) { }

  getGames(){ 
    return this.httpClient.get(this.games+this.token+this.pages).pipe(
      map((response: any) => {
        return response.results
      })
    ); 
  } 

  getGenres(){ 
    return this.httpClient.get(this.genres+this.token+this.pages).pipe(
      map((response: any) => {
        return response.results
      })
    ); 
  }

  getGamesbyGenre(id: any){
    return this.httpClient.get(this.games+this.token+this.pages+'&genres='+id).pipe(
      map((response: any) => {
        return response.results
      })
    ); 
  }
}
