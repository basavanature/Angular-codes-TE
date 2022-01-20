import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';//imported

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
//dependency injection of userservice
  constructor(private data:UserService) { }
  result:any
  ngOnInit(): void {
    this.data.getdata().subscribe(data=>{this.result=data})
  }

}
