import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFormatOrderDate'
})
export class CustomFormatOrderDatePipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): unknown {
    let date = new Date(value);
    return `${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}, ${date.getFullYear()}`;
  }

}
