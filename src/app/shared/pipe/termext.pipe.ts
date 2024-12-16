import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'termext'
})
export class TermextPipe implements PipeTransform {

  transform(text:string,limit:number): string {
    return text .split(' ').slice(0,limit).join(' ');
  }

}
