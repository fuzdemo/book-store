import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FusionizeAngularModule} from "@fusionize/fusionize-angular";
import {NgbModule, NgbNavModule} from '@ng-bootstrap/ng-bootstrap';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import {SidenavComponent} from "./components/sidenav/sidenav.component";

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    FusionizeAngularModule,
    NgbModule,
    NgbNavModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
