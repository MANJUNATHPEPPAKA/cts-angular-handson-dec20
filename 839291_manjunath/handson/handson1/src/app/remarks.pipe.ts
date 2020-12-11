import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remarks'
})
export class RemarksPipe implements PipeTransform {

  transform(val: number): string {
    if(val >= 50){
      return "First Class";
    } else if(val < 50 && val > 35){
      return "Pass";
    } else if(val <= 35){
      return "Fail";
    }
  }
}
