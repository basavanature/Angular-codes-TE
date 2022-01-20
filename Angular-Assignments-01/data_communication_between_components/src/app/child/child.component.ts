import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() parentValue:any
  @Output() data:EventEmitter<string>=new EventEmitter<string>()
  val:any
  getData(){
    return this.val=this.parentValue
  }
  passData(){
    this.data.emit("data received from child to parent")
  }
  constructor() { }

  ngOnInit(): void {

  }

}
