import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutesFormat'
})
export class MinutesFormatPipe implements PipeTransform {

  transform(value: number): string {
    let minutes = Math.floor(value / 1000 / 60) ;
    let seconds = (value - minutes * 1000 * 60) / 1000;
    return `${value} = ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

}
