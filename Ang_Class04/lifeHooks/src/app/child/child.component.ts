import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnDestroy,OnChanges,DoCheck,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked {
  interval:any
  counter:number=0
  @Input() uname:any
  @ContentChild("cheader",{static:false})element:any
  constructor() {
    console.log("child constructor called");
    
   }
  ngOnInit(): void {
    console.log("child ngOnInit() is called");
    // this.interval=setInterval(()=>{
    //   console.log(this.counter++);
    // },1000)
  }
  ngOnChanges(changes: SimpleChanges): void {
      console.log("child OnChanges has been called");
      console.log(changes);
  }
  ngDoCheck(): void {
      console.log("child DoCheck has been called");
  }
  ngAfterContentInit(): void {
      console.log("child AfterContentInit has been called"+this.element);
      this.element.nativeElement.innerHTML="Teja"//passing a content to the element
  }
  ngAfterContentChecked(): void {
    console.log("child AfterContentChecked has been called");
  }
  ngAfterViewInit(): void {
    console.log("child AfterviewInit has been called");
  }
  ngAfterViewChecked(): void {
    console.log("child AfterViewChecked has been called");
  }
  ngOnDestroy(): void {
    console.log("Child component destroyed");
    
      // clearInterval(this.interval)
  }
}
