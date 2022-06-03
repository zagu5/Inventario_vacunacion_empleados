import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegister = new FormGroup({
    document: new FormControl(''),
    firstname: new FormControl(''), 
    lastname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });
  
 

  constructor(
    private formBuilder: FormBuilder,
    private _auth: AuthService
    ) {
     this.createForm()
   }

  ngOnInit(): void {
    //this.createForm() 
  }

 createForm(){
   this.formRegister = this.formBuilder.group({
    document: ['', [Validators.required, Validators.minLength(10)]],
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]

   })
 }

 onRegister(){
  console.log(this.formRegister.value);
  const {email, password} = this.formRegister.value;
  this._auth.registro(email, password)
 }


}