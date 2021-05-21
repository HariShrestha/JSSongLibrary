import { Lookup } from './lookup';
export interface ISong{
  id:number;
  title: string;
  artist: string;
  date:Lookup;
  price:number;
}
export class Song {
  id:number;
  title: string;
  artist: string;
  date:Lookup;
  price:number;

  constructor(
    title?:string,
    artist?:string,
    date?:Lookup,
    price?:number){
      this.title = title;
      this.artist = artist;
      this.date = date;
      this.price = price;
  }
}
