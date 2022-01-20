import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fm-component',
  templateUrl: './fm-component.component.html',
  styleUrls: ['./fm-component.component.css']
})
export class FMComponentComponent implements OnInit {

  constructor() { 
    console.log("feature module component");
    
  }

  ngOnInit(): void {
  }

}
