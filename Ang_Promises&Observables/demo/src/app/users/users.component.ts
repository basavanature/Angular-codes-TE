import { Component, OnDestroy, OnInit } from '@angular/core';
import { observable, Observable,Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit,OnDestroy {
    count=0
    mySub: Subscription = new Subscription;
  
  constructor() {
   }
  ngOnInit(): void {
    //promises

    const promises=new Promise((resolve) => {
      console.log("Promise has been called");
      setTimeout(()=>{
        resolve("Data 1 from promises")
        resolve("Data 2 from promises")
        resolve("Data 3 from promises")
        resolve("Data 4 from promises")
      },1000)  
    })
    //listining the promises
    promises.then(result=>{console.log(result);
    })

    //Observables
    const observables=new Observable(sub=>{
      console.log("observable has been called");
      setInterval(()=>{
      sub.next("data from observable"+" "+this.count++);
      //   sub.next("Data 1 from Observable")
    //   sub.next("Data 2 from Observable")
    //   sub.next("Data 3 from Observable")
    //   sub.next("Data 4 from Observable")
    
    },1000)
    })

    //listining to observables
      this.mySub=observables.subscribe(result=>{console.log(result);
      })

    }

    ngOnDestroy(): void {
      console.log("user destroyed");
      this.mySub.unsubscribe()
    }
    
    }