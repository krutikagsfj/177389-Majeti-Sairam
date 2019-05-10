// System defined Components and importing them

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { RouterModule } from '../../node_modules/@angular/router';



// User defined Components and the imports
import { AppComponent } from './app.component';
import { PlayComponent } from './play/play.component';
import { SuccessComponent } from './success/success.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule } from '../../node_modules/@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PlayComponent,
    SuccessComponent
  ],
  imports: [
    // Importing modules
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
