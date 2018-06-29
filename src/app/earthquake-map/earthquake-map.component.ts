import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet'
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/rx';

@Component({
  selector: 'app-earthquake-map',
  templateUrl: './earthquake-map.component.html',
  styleUrls: ['./earthquake-map.component.css']
})
export class EarthquakeMapComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {
    var QUAKE_URL = 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson';
    var map = L.map('map').setView([33.858631, -118.279602], 7);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);

    var quakes = Observable
      .interval(10000)
      .flatMap(() => {
        return this.http.request(QUAKE_URL)
      })
      .flatMap((result: Response) => {
        return Observable.from(result.json().features);
      })
      .distinct((quake: any) => {
        return quake.properties.code;
      });

      quakes.subscribe((quake: any) => {
        var coords = quake.geometry.coordinates;
        var size = quake.properties.mag * 10000;
        L.circle([coords[1], coords[0]],size).addTo(map);

      });
  }

}
