import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";



@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(
    public _auth: AngularFireAuth,



  ) {}

  async login(email: string, password: string){
    const result = await this._auth.signInWithEmailAndPassword(email, password)
    return result
  }

  async registro(email: string, password: string){
    const result = await this._auth.createUserWithEmailAndPassword(email, password)
    return result
  }

  async logOut(){
    this._auth.signOut();
 }

  getInfoUsuarioLoggeado(){
    return this._auth.authState;
}
}
