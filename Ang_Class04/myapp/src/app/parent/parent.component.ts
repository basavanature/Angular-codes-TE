import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  salesproducts =[
    {name:"mobile",price:20000},
    {name:"headset",price:1599},
    {name:"smartwatch",price:2560},
  ]
  newproducts =[
    {name:"tab",price:10000},
    {name:"airpods",price:3000},
    {name:"USB cable",price:500},
  ]
}
