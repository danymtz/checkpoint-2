import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertRatingPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return (value*100/5).toPrecision(2) + '%';
  }

}
