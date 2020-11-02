import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-mapa",
  templateUrl: "./mapa.component.html",
  styleUrls: ["./mapa.component.css"],
})
export class MapaComponent implements OnInit {
  title = "Practicando integración de mapa";
  latLondon: number = 51.50853;
  lngLondon: number = -0.12574;

  latChelmsford: number = 51.73575;
  lngChelmsford: number = 0.46958;

  userMarkers = [
    { lat: 51.60681141335148, lng: 0.1313942659928724 },
    { lat: 51.680274355154864, lng: 0.31912305839236765 },
  ];

  constructor() {}

  ngOnInit() {}
}
