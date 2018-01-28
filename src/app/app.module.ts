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
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

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
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    RouterModule.forRoot(routes),
    ScrollToModule.forRoot()

  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
