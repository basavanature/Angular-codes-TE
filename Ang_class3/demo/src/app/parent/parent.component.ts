import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  result:any
  getData(value: any){
    this.result=value
  }
  flag:boolean=true
  change(){
    if(this.flag===true){
      this.flag=false
    }else{
      this.flag=true
    }
  }
  constructor() { }
  
  ngOnInit(): void {
  }

}
