import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ISong, Song } from '../models/song';
import { max } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SongService {


  private songs:Array<Song> =   [
    {  id:1, title: 'Country song', artist:'Brand Adms', date: { title: 'country', artist: 'Justin', date:2020 }, price: 100},
    {  id:2, title: 'Party in the USA song', artist:'Miley Cyrus', date: { title: 'country', artist: 'Justin', date:2008 }, price: 100},
    {  id:3, title: 'Hero', artist:'Erique', date: { title: 'country', artist: 'Justin', date:1998 }, price: 100},
    {  id:4, title: 'Bylando', artist:'Anky Daddy', date: { title: 'country', artist: 'Justin', date:2018 }, price: 100},
    {  id:5, title: 'Folk Song', artist:'abc band', date: { title: 'country', artist: 'Justin', date:2006 }, price: 100}
];

  constructor() { }

  getAllSongs():Observable<ISong[]>{
    return of(this.songs)
  }

  getSongById(id:number):Observable<ISong>{
    var song = this.songs.find(item => item.id === id);
    return of(song);
  }

  addNewSong(song:ISong):void{
    this.songs.sort(item => item.id)
    song.id = this.songs.length + 1
    this.songs.push(song);
  }
  sortSong(song:ISong):ISong[]{
    return this.songs.sort((a, b) => 0 - (a > b ? -1 : 1));
  }

  deleteSong(song:ISong):ISong[]{
    const index = this.songs.findIndex(item => item.id === song.id);
    const deletedItem = this.songs.splice(index,1);

    return deletedItem;
  }

  updateSong(song:ISong):void{

    const index = this.songs.findIndex(item => item.id === song.id);
    this.songs[index] = song;
  }

}
