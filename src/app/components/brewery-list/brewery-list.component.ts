import { Component, OnInit } from '@angular/core';
import { BreweryService } from '../../services/brewery.service';
import { Brewery } from 'src/app/model/brewery';

@Component({
  selector: 'app-brewery-list',
  templateUrl: './brewery-list.component.html',
  styleUrls: ['./brewery-list.component.css']
})
export class BreweryListComponent implements OnInit {
  
  breweries: Brewery[];
  
  constructor(private brewerService: BreweryService) { }

  ngOnInit() {

    // this.brewerService.getBreweries().subscribe(data => {
    //   this.breweries = data;
    //   console.log(this.breweries);
    // })
    this.breweries = this.brewerService.getAustralianBreweries();
  }

}
