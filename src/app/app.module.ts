import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from "../components/header/header.component";
import {RouterModule} from "@angular/router";
import {routes} from "./app.routers";
import {FooterComponent} from "../components/footer/footer.component";
import {PlantComponent} from "../components/plants/plant.component";
import {OfferComponent} from "../components/offer/offer.component";
import {AboutComponent} from "../components/about/about.component";
import {ContactComponent} from "../components/contact/contact.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PlantComponent,
    OfferComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
