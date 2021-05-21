import { Component, OnInit } from '@angular/core';
import { Song, ISong } from '../models/song';
import { Observable } from 'rxjs';
import { SongService } from '../service/song.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  //[x: string]: any;

  public songs:Observable<ISong[]> = null;
  constructor(
    private router: Router,
    private songService:SongService) { }

  ngOnInit() {
      this.songs = this.songService.getAllSongs()
  }

  deleteSong(song):void{
    const result = this.songService.deleteSong(song);
    console.log(result);
  }
  sortSong(song):void{
    const result = this.songService.sortSong(song);
    console.log(result);
  }

  editSong(song:ISong):void{
    this.router.navigate(['songs/view/'+song.id]);
  }
}
