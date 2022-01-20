import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, asNativeElements, Component, DoCheck, ElementRef, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,OnChanges,DoCheck,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked{
flag=true
uname:any
  @ViewChildren("header")elem!: QueryList<any>;
  // elem!:ElementRef
toggleChild(){
  this.flag=!this.flag
}
  constructor() { 
    console.log("parent constructor called",this.elem);
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("parent OnChanges has been called");
      
  }
  ngOnInit(): void {
    console.log("parent ngOnInit() called",this.elem); 
  }
  ngDoCheck(): void {
      console.log("Parent DoCheck has been called");
      
  }
  ngAfterViewInit(): void {
    console.log("Parent AfterViewInit has been called");
    
      console.log(this.elem);
      
  }
  ngAfterViewChecked(): void {
    console.log("Parent AfterViewChecked has been called");
  // this.elem!.nativeElement.innerHTML="charan"
  }
  ngAfterContentInit(): void {
    console.log("Parent AfterContentInit has been called");
  }
  ngAfterContentChecked(): void {
    console.log("Parent AfterContentChecked has been called");
  }

}
