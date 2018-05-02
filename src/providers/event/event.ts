
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

/*
  Generated class for the EventProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventProvider {

  constructor(private db: AngularFirestore) {
    console.log('Hello EventProvider Provider');
  }
//get Events
getEvents()
{
  return this.db.collection('events').valueChanges();
  } 
  //añado un evento
  addEvent(nameEvent:string, description:string)
  {
    const id = this.db.createId(); 
    return this.db.collection('events').doc(id).set({
     id: id, nameEvent: nameEvent, description: description
    });
    
}  
}
