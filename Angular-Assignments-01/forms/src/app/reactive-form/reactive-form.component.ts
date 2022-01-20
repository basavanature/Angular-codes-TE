import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  namePattern:any="[A-Za-z]+$"
  emailPattern:any="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
  passPattern:any="^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$"
  submitForm=new FormGroup({
    fname:new FormControl("",[Validators.required,Validators.pattern(this.namePattern)]),
    lname:new FormControl("",[Validators.required,Validators.pattern(this.namePattern)]),
    email:new FormControl("",[Validators.required,Validators.pattern(this.emailPattern)]),
    pass:new FormControl("",[Validators.required,Validators.pattern(this.passPattern)]),
    gender:new FormControl("",[Validators.required]),
    address:new FormControl("",[Validators.required,Validators.minLength(5)]),
    city:new FormControl("",[Validators.required,Validators.minLength(3)]),
    state:new FormControl("",[Validators.required]),
    zip:new FormControl("",[Validators.required,Validators.minLength(6)]),
    check:new FormControl("",[Validators.required])
  })
  get fname(){
    return this.submitForm.get('fname')
  }
  get lname(){
    return this.submitForm.get('lname')
  }
  get email(){
    return this.submitForm.get('email')
  }
  get pass(){
    return this.submitForm.get('pass')
  }
  get gender(){
    return this.submitForm.get('gender')
  }
  get address(){
    return this.submitForm.get('address')
  }
  get city(){
    return this.submitForm.get('city')
  }
  get state(){
    return this.submitForm.get('state')
  }
  get zip(){
    return this.submitForm.get('zip')
  }
  get check(){
    return this.submitForm.get('check')
  }
  SubmitForm(){
    console.log(this.submitForm.value);
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
