
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Camera } from '@ionic-native/camera';
/*
  Generated class for the GuestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GuestProvider {

  constructor(private db: AngularFirestore) {
   
  }
  //añado un invitado a un evento
  addGuest(id:string, nameGuest:string, imgGuest:string)
  {
    const idGuest = this.db.createId(); 
    return this.db.collection('events').doc(id).collection('guests').doc(idGuest).set({
     idGuest: id, nameGuest: nameGuest, imgGuest: imgGuest
    });
  }
  //obtengo la lista de invitados de un evento
  getGuest(idEvent:string)
{
    return this.db.collection('events').doc(idEvent).collection('guests').valueChanges();
 }
  


}
