import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EarthquakeMapComponent } from './earthquake-map/earthquake-map.component';

@NgModule({
  declarations: [
    AppComponent,
    EarthquakeMapComponent
  ],
  imports: [
    BrowserModule,
    LeafletModule.forRoot(),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
