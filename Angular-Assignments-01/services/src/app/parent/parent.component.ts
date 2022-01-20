import { Component, Injectable, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  productData:any
  constructor(private product:ServiceService) {
    this.productData=this.product.getData()
   }

  ngOnInit(): void {
  }

}
