import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  flag:boolean=false
  toggleUser(){
    this.flag=!this.flag
  }
  users=[
    {name:"charan",city:"Banglore",id:101,sal:50000,dob:new Date("22 jan 1997")},
    {name:"sai",city:"Banglore",id:101,sal:40000,dob:new Date("29 jul 1998")},
    {name:"lalu",city:"Banglore",id:101,sal:50000,dob:new Date("18 Mar 1997")}
  ]
  //local storage
  storedata:any=localStorage.setItem("data","value in local storage")
  getdata:any=localStorage.getItem("data")
}
