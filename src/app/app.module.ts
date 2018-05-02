import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CameraProvider } from '../providers/camera/camera';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { UsersProvider } from '../providers/users/users';
import { EventProvider } from '../providers/event/event';
import { AngularFirestore } from 'angularfire2/firestore';
import { GuestProvider } from '../providers/guest/guest';
import { Camera } from '@ionic-native/camera';
export const firebaseConfig = 
  {
    apiKey: "AIzaSyAhHj0JPKmCfEAoatPTSQnpEbXdrw5ZFV8",
    authDomain: "app-camera-android.firebaseapp.com",
    databaseURL: "https://app-camera-android.firebaseio.com",
    projectId: "app-camera-android",
    storageBucket: "app-camera-android.appspot.com",
    messagingSenderId: "756811209961", 
    automaticDataCollectionEnabled: true
}
@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFirestore,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CameraProvider,
    UsersProvider,
    EventProvider,
    GuestProvider,
    Camera
  ]
})
export class AppModule {}
