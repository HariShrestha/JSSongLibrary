import { Injectable } from '@angular/core';
import { Lookup } from '../song/models/lookup';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LookupService {

  private date: Array<Lookup> =[
    {title: 'Country', artist:"Brands adams", date: 1978},
    {title: 'Country', artist:"Brands adams", date: 1979},
    {title: 'Country', artist:"Brands adams", date: 1980},
    {title: 'Country', artist:"Brands adams", date: 1981},
    {title: 'Country', artist:"Brands adams", date: 1982},
    {title: 'Country', artist:"Brands adams", date: 1983},
    {title: 'Country', artist:"Brands adams", date: 1984},
    {title: 'Country', artist:"Brands adams", date: 1985},
    {title: 'Country', artist:"Brands adams", date: 1986},
    {title: 'Country', artist:"Brands adams", date: 1987},
    {title: 'Country', artist:"Brands adams", date: 1988},
    {title: 'Country', artist:"Brands adams", date: 1989},
    {title: 'Country', artist:"Brands adams", date: 1990},
    {title: 'Country', artist:"Brands adams", date: 1991},
    {title: 'Country', artist:"Brands adams", date: 1992},
    {title: 'Country', artist:"Brands adams", date: 1993},
    {title: 'Country', artist:"Brands adams", date: 1994},
    {title: 'Country', artist:"Brands adams", date: 1995},
    {title: 'Country', artist:"Brands adams", date: 1996},
    {title: 'Country', artist:"Brands adams", date: 1997},
    {title: 'Country', artist:"Brands adams", date: 1998},
    {title: 'Country', artist:"Brands adams", date: 1999},
    {title: 'Country', artist:"Brands adams", date: 2000},
    {title: 'Country', artist:"Brands adams", date: 2001},
    {title: 'Country', artist:"Brands adams", date: 2002},
    {title: 'Country', artist:"Brands adams", date: 2003},
    {title: 'Country', artist:"Brands adams", date: 2004},
    {title: 'Country', artist:"Brands adams", date: 2005},
    {title: 'Country', artist:"Brands adams", date: 2006},
    {title: 'Country', artist:"Brands adams", date: 2007},
    {title: 'Country', artist:"Brands adams", date: 2008},
    {title: 'Country', artist:"Brands adams", date: 2009},
    {title: 'Country', artist:"Brands adams", date: 2010},
    {title: 'Country', artist:"Brands adams", date: 2011},
    {title: 'Country', artist:"Brands adams", date: 2012},
    {title: 'Country', artist:"Brands adams", date: 2013},
    {title: 'Country', artist:"Brands adams", date: 2014},
    {title: 'Country', artist:"Brands adams", date: 2015},
    {title: 'Country', artist:"Brands adams", date: 2016},
    {title: 'Country', artist:"Brands adams", date: 2017},
    {title: 'Country', artist:"Brands adams", date: 2018},
    {title: 'Country', artist:"Brands adams", date: 2019},
    {title: 'Country', artist:"Brands adams", date: 2020},
    {title: 'Country', artist:"Brands adams", date: 2021}
  ];





  constructor() { }



  getDates():Observable<Lookup[]>{
    return of(this.date);
  }
}
