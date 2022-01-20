import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'databinding_examples';
  value:string="Interpolation"
  val:string="Property binding"
  //class and style bindings
  isSpecial:boolean=false
  c1:string="red"
  c2:string="green"
  v:any
  display(){
     return this.v="Event binding"
  }
  //two way binding
  showResult:any
}
