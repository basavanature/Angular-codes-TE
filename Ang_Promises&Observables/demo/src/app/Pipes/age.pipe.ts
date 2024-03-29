import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value:any):any {
    let curYear=new Date().getFullYear();
    let userYear=new Date(value).getFullYear();
    let userAge=curYear-userYear
    return userAge
  }

}
