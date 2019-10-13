import { Component, OnInit, Input } from '@angular/core';
import { Brewery } from 'src/app/model/brewery';

@Component({
  selector: 'app-brewery',
  templateUrl: './brewery.component.html',
  styleUrls: ['./brewery.component.css']
})
export class BreweryComponent implements OnInit {
@Input() brewery:Brewery
  constructor() { }

  ngOnInit() {
  }

}
