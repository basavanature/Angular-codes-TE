import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  value:any
  result:any
  getData(data:any){
    this.result=data
  }
  constructor() { }

  ngOnInit(): void {
    this.value="value from parent displaying in child"
  }

}
