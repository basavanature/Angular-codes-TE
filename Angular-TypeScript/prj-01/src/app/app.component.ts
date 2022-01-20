import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prj-01';
  value="Interpolation"
  val="Property Binding";

  isSpecial:boolean=false
  c1="blue"
  c2="green"
  colval=2
  display(){
    console.log("inside the display function"); 
  }
  displayResult:any
}
