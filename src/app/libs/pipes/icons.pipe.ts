import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'icons'
})
export class IconsPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {

    switch(value){
      case 'PC': return `./assets/icons8-windows8-26.png`;
      case 'PlayStation': return `./assets/icons8-play-station-50.png`;
      case 'Xbox': return `./assets/icons8-xbox-26.png`;
      case 'Apple Macintosh': return `./assets/icons8-logo-de-mac-50.png`;
      case 'Linux': return `./assets/icons8-linux-26.png`;
      case 'Android': return `./assets/icons8-android-os-50.png`;
      case 'iOS': return `./assets/icons8-mac-os-26.png`;
      case 'Nintendo': return `./assets/icons8-nintendo-24.png`;
      default: return ``
    }
  }

}
