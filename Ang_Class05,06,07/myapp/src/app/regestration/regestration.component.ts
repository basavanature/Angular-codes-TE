import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-regestration',
  templateUrl: './regestration.component.html',
  styleUrls: ['./regestration.component.css']
})
export class RegestrationComponent implements OnInit {

  onSubmit(form:NgForm){
    console.log(form.value);
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
