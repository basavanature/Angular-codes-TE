import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,OnDestroy,OnChanges,DoCheck,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked {
  flag=true
  uname:any
  @ViewChildren("header")
  elem!: QueryList<any>;
    //@ViewChildren("header")elem!: QueryList<any>;
    // elem!:ElementRef
  toggleChild(){
    this.flag=!this.flag
  }
  
  constructor() { 
    console.log("parent constructor has been called");
    
  }

  ngOnInit(): void {
    console.log("parent ngOnInit has been called");

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("parent ngOnChanges has been called");
      
  }
  ngDoCheck(): void {
    console.log("parent ngDoCheck has been called");
    
      
  }
  ngAfterContentInit(): void {
    
    console.log("parent ngAfterContentInit has been called");
      
  }
  ngAfterContentChecked(): void {
    console.log("parent ngAfterContentChecked has been called");
      
  }
  ngAfterViewInit(): void {
    console.log("parent ngAfterViewInit has been called");
      
  }
  ngAfterViewChecked(): void {
    console.log("parent ngAfterViewChecked has been called");
      
  }
  ngOnDestroy(): void {
    console.log("parent component destroyed (ngOnDestroy has been called)");
      
  }
}
