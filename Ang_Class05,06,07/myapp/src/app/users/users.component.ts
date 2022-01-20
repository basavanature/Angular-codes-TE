import { Component, OnInit } from '@angular/core';
import { UserservicesService } from '../services/userservices.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  values:any

  constructor(private user:UserservicesService) { }
  ngOnInit(): void {
    this.values=this.user.getData()
  }

}
