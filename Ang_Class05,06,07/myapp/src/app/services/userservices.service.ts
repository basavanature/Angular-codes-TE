import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserservicesService {

  getData(){
    return [
      {name:"charan",department:"development",id:1},
      {name:"sai",department:"development",id:2},
      {name:"basava",department:"development",id:3},
      {name:"shanmuk",department:"development",id:4},
      {name:"madhav",department:"development",id:5},
      {name:"lalu",department:"development",id:6},
    ]
  }

  constructor() { }
}
