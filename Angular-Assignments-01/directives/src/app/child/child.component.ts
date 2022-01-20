import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products=[
    {name:"bottel",price:250},
    {name:"glass",price:50},
    {name:"bag",price:500},
    {name:"plate",price:100}
  ]

}
