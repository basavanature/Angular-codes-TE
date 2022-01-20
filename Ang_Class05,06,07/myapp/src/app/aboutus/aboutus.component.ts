import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { UserservicesService } from '../services/userservices.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  // val:any


  @ViewChild("username")element:any
  
  ID:any
  idGenerator(){
  let name=(this.element.nativeElement.value).substring(0,3).toUpperCase()
  var randnumb:string=`${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}`
  this.ID="TY"+name+"DEV"+randnumb
  }
  constructor(private User:UserservicesService) { }

  ngOnInit(): void {
    //this.val=this.User.getData()
  }

}
