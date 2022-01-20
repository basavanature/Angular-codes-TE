import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnDestroy,OnChanges,DoCheck,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked {

  constructor() { 
    console.log("Child constructor has been called");

  }

  ngOnInit(): void {
    console.log("Child ngOnInit has been called");

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Child ngOnChanges has been called");
      
  }
  ngDoCheck(): void {
    console.log("Child ngDoCheck has been called");
      
  }
  ngAfterContentInit(): void {
    console.log("Child ngAfterContentInit has been called");
      
  }
  ngAfterContentChecked(): void {
    console.log("Child ngAfterContentChecked has been called");
      
  }
  ngAfterViewInit(): void {
    console.log("Child ngAfterViewInit has been called");
      
  }
  ngAfterViewChecked(): void {
    console.log("Child ngAfterViewChecked has been called");
      
  }
  ngOnDestroy(): void {
    console.log("Child component has been destroyed (ngOnDestroy has been called)");
      
  }
}
