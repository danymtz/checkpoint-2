import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { RequestService } from 'src/app/services/request.service';

@Injectable({
  providedIn: 'root'
})
export class GetGenreResolver implements Resolve<boolean> {

  public data$!: Observable<any>

  constructor (private requestService: RequestService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    const idGenre: any = route.params['id'];
    
    this.data$ = this.requestService.getGamesbyGenre(idGenre).pipe(
      map ((response: any) => {
        return response.results
      })
    );

    console.log(this.data$);
    

    return of(true);
  }
}
