import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Brewery } from '../model/brewery';

 @Injectable({
  providedIn: 'root'
})
export class BreweryService {
   breweriesUrl: string = 'https://api.openbrewerydb.org/breweries';
   constructor(private http: HttpClient) { }
   
   getBreweries(): Observable<Brewery[]> {
     return this.http.get<Brewery[]>(this.breweriesUrl);
   }
 }


