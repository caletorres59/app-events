import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventProvider } from '../../providers/event/event';
import { Events } from './event.interface';

/**
 * Generated class for the ListEventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-events',
  templateUrl: 'list-events.html',
})
export class ListEventsPage {
  nameEvent: string;
  description: string;
  formEvent = false;
  events: Events[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private provEvents: EventProvider) {
     provEvents.getEvents().subscribe((content) => (this.events =<Events[]>content));
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListEventsPage');
  }
  addEvent()
  {
    console.log(this.nameEvent);
    this.provEvents.addEvent(this.nameEvent,this.description)
  }
  showEvent(event2:Events): void
  {
    console.log(event2);
    this.navCtrl.push('EventPage', {contentEvent: event2});
  }

}
