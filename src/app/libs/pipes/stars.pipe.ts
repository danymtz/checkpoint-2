import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stars'
})
export class StarsPipe implements PipeTransform {

  stars: string= '☆☆☆☆☆';                               // Inicializamos con estrellas vacias

  transform(value: number, ...args: unknown[]): unknown { // Recibimos en value nuestro valor decimaal

    for (let i=0; i<Math.round(value); i++) {             // Redondeo al entero más cercano
      //this.stars.concat('★') No concatena
      this.stars = this.stars.slice(1)                    // Elimina la primer estrella vacia del arreglo
      this.stars = this.stars + '★';                     // Concatena una estrella llena
    }

    this.stars = this.stars.split('').reverse().join(''); // Invierte el orden de la cadena

    return this.stars;
  }

}
