import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer, icon, marker } from 'leaflet';
import { BreweryService } from 'src/app/services/brewery.service';
import { Brewery } from 'src/app/model/brewery';

@Component({
  selector: 'app-brewery-map',
  templateUrl: './brewery-map.component.html',
  styleUrls: ['./brewery-map.component.css']
})
export class BreweryMapComponent implements OnInit {

  layersControl = {};
  
  options = {};

  breweries: Brewery[];

  markers: any[] = [];

  constructor(private breweryService: BreweryService) { }

  ngOnInit() {
    this.getBrewries();
    this.doLayersControl();
    this.generateOptions();
  }

  getBrewries(): void {
    this.breweries = this.breweryService.getAustralianBreweries();
    this.generateMarkers();
  }

  getStreetMapsBaseLayer():any {
    let streetMaps = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      detectRetina: true,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    return streetMaps;
  }

  getWikiMediaLayer(): any {
    let wMaps = tileLayer('http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
      detectRetina: true,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    return wMaps;
  }

  generateOptions() {
    // Set the initial set of displayed layers (we could also use the leafletLayers input binding for this)
    let l_layers = [];
    l_layers.push(this.getStreetMapsBaseLayer());
    // l_layers.push(this.generateMarkers()[0]);
    // l_layers.push(this.generateMarkers()[1]);
    this.markers.forEach(item => {
      console.log('item,', item);
      l_layers.push(item);
    });

    this.options = {
      layers: l_layers,
      zoom: 4,
      center: latLng([-26.15543796871355, 135.7470703125])
    };

  }
  generateMarkers() {
    
    this.breweries.forEach(item => {
      console.log("item =", item.latitude);
      let brew = marker([Number(item.latitude), Number(item.longitude)], {
        icon: icon({
          iconSize: [20, 35],
          iconAnchor: [13, 41],
          iconUrl: 'leaflet/marker-icon.png',
          shadowUrl: 'leaflet/marker-shadow.png'
        })
      });
      this.markers.push(brew);
    });
    // // Marker for the top of Mt. Ranier
    // let summit = marker([-33.7243396617476, 139.4384765625], {
    //   icon: icon({
    //     iconSize: [25, 41],
    //     iconAnchor: [13, 41],
    //     iconUrl: 'leaflet/marker-icon.png',
    //     shadowUrl: 'leaflet/marker-shadow.png'
    //   })
    // });
    
    // markers.push(summit);

    // // Marker for the parking lot at the base of Mt. Ranier trails
    // let paradise = marker([-36.03133177633187, 140.5810546875], {
    //   icon: icon({
    //     iconSize: [25, 41],
    //     iconAnchor: [13, 41],
    //     iconUrl: 'leaflet/marker-icon.png',
    //     shadowUrl: 'leaflet/marker-shadow.png'
    //   })
    // });
    
    // markers.push(paradise);
    // console.log('markes=', markers);
    // return markers;
  }

  doLayersControl() {
    this.layersControl = {
      baseLayers: {
        'Street Maps': this.getStreetMapsBaseLayer(),
        'Wikimedia Maps': this.getWikiMediaLayer()
      },
      // overlays: {
      //   'Mt. Rainier Summit': this.generateMarkers()[0],
      //   'Mt. Rainier Paradise Start': this.generateMarkers()[1]
      //   // 'Mt. Rainier Climb Route': this.route
      // }
    };
  }
}
