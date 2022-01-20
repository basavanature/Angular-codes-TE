import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  productData:any
  constructor(private data:ServiceService) {
    this.productData=this.data.getData()
   }

  ngOnInit(): void {
  }

}
