import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FusionizeAngularModule} from "@fusionize/fusionize-angular";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FusionizeAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
