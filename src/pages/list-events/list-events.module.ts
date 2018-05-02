import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListEventsPage } from './list-events';

@NgModule({
  declarations: [
    ListEventsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListEventsPage),
  ],
})
export class ListEventsPageModule {}
