import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostAttiviComponent } from './post-attivi/post-attivi.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostInattiviComponent } from './post-inattivi/post-inattivi.component';

@NgModule({
  declarations: [
    AppComponent,
    PostAttiviComponent,
    NavbarComponent,
    PostInattiviComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
