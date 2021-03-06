import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapaComponent } from './pages/mapa/mapa.component';
import { ListComponent } from './pages/list/list.component';
import { FormComponent } from './pages/form/form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from "@agm/core";

@NgModule({
  declarations: [
    AppComponent,
    MapaComponent,
    ListComponent,
    FormComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyD5Uvwzsminn4Ngu1Onjjhd4vlf3oQgVJM",
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
