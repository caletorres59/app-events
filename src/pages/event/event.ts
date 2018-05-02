import { Guest } from './../../assets/icon/guest.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Events } from '../list-events/event.interface';
import { GuestProvider } from '../../providers/guest/guest';
import { Camera } from '@ionic-native/camera'

/**
 * Generated class for the EventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {
   
  event2: Events;
  persons: Guest[] = [];
  showFormGuest: boolean = false;
  nameGuest: string;
  imgGuest: string = 'assets/imgs/profile.png';
  idEvent: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public provideGuest:GuestProvider, public cameraPlugin: Camera ) {
    //Obtengo el objeto de tipo evento
    this.event2 = this.navParams.get('contentEvent');
    // obtengo el id del objeto
    this.idEvent = this.event2.id;
    // envio el idi como parametro para obtener a los invitados de un evento
    provideGuest.getGuest(this.idEvent).subscribe((content) => (this.persons =<Guest[]>content));

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventPage');
  }
  //metodo para acceder a la camara del dispositivo
  takePicture(): void{
    this.cameraPlugin.getPicture({
      quality: 100,
      destinationType: this.cameraPlugin.DestinationType.DATA_URL,
      encodingType: this.cameraPlugin.EncodingType.JPEG,
      mediaType: this.cameraPlugin.MediaType.PICTURE
    }
    ).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.imgGuest = 'data:image/jpeg;base64,' + imageData;
      
     }, (err) => {
       console.log(err);
     });
  }
  // añado un invitado
  addGuest(id):void
  {
    this.provideGuest.addGuest(id,this.nameGuest, this.imgGuest);
    
  }

}
