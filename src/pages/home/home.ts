import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Users } from './users.interface';
import { FormGroup } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: Users;
  email: string;
  password: string;
  public myForm : FormGroup;
  
  constructor(public navCtrl: NavController,public afAuth: AngularFireAuth) {
    
  }
  //Metodo para autenticar un usuario con email y contraseña
  addUser(): void{

    console.log(""+this.email)
    this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password)
      .then((user) => {
        
        console.log(user);
      })
      .catch(error => console.log(error));
    
  }

}
