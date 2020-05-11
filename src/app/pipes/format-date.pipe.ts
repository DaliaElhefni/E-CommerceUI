import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): unknown {
    var date = new Date(value);
    let month = date.getMonth()+1;
    let day = date.getDate();
    let dayStr = day.toString();
    if(day.toString().length === 1){
      dayStr = `0${day.toString()}`;
    }
    let monthStr = month.toString();
    if(month.toString().length === 1){
      monthStr = `0${month.toString()}`;
    }
    return `${dayStr}/${monthStr}/${date.getFullYear()}`;
  }
}
