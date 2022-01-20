import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  flag:boolean=true
  title = 'demo';

  selectedcountry="India"

  users=[
    {name:"charan",age:25},
    {name:"Teja",age:26},
    {name:"sai",age:27},
    {name:"lalu",age:24},
  ]

  change(){
    if(this.flag===false){
    this.flag=true
  }else{
    this.flag=false
  }
}
}
