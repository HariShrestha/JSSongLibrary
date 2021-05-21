import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ISong } from '../models/song';
import { SongService } from '../service/song.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  song$:Observable<ISong>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private songService:SongService) { }

  ngOnInit() {

    this.song$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
          this.songService.getSongById(Number.parseInt(params.get('id')))
        ));
    }

    editSong(songt:ISong):void{

      this.song$.subscribe(song =>{
        console.log('edit clicked');
        this.router.navigate(['songs/edit/'+song.id]);
      });
  }
}
