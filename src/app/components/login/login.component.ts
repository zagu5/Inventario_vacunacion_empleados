import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''), 
  });
  constructor(
    private formBuilder: FormBuilder,
    private _auth: AuthService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.createFormLogin()
  }

  createFormLogin(){
    this.formLogin = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(10)]],
      password: ['', Validators.required],  
     })
  }

  async onLogin(){
    console.log(this.formLogin.value);
    const {email, password} = this.formLogin.value
    try{
      const user = await this._auth.login(email, password)
      if(user){
        this._router.navigate(['/', 'administrador'])
      }      
    } catch(error){
      console.log(error)
    }
  }
}
