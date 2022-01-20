import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  getData(){
    return [
      {name:"bottel",price:250},
      {name:"glass",price:50},
      {name:"bag",price:500},
      {name:"plate",price:100}
    ]
  } 
  constructor() { 
     
  }
}
