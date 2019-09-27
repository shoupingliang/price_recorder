import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { IndexComponent } from './components/index/index.component';
import { CreateComponent } from './components/create/create.component';
import { ShareService } from './share.service';

import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    ReactiveFormsModule
  ],
  providers: [ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
