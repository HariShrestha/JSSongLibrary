import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Lookup } from '../models/lookup';
import { LookupService } from 'src/app/shared/lookup.service';
import { Song, ISong } from '../models/song';
import { SongService } from '../service/song.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';

var count:number = 0;
@Component({

  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit, OnDestroy {


  private observableSubscription:Array<Subscription> = [];
  formSubmitted = false;

  songForm = this.fb.group({});
  date:Observable<Lookup[]>;
  constructor(private fb:FormBuilder,
    private lookupService:LookupService,
    private songService:SongService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.songForm.addControl('id',new FormControl(''));
    this.songForm.addControl('title',new FormControl('',[Validators.required]));
    this.songForm.addControl('artist',new FormControl('',[Validators.required]));
    this.songForm.addControl('date',new FormControl('',[Validators.required]));
    this.songForm.addControl('price',new FormControl('',[Validators.required]));
    this.date = this.lookupService.getDates();


    const song$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
          this.songService.getSongById(Number.parseInt(params.get('id')))
        ));

        song$.subscribe(song=>{
          if(!isNullOrUndefined(song)){
            console.log(song);
            this.songForm.get('id').setValue(song.id);
            this.songForm.get('title').setValue(song.title);
            this.songForm.get('artist').setValue(song.artist);
            this.songForm.get('date').setValue(song.date.title);
            this.songForm.get('price').setValue(song.price);

          }
        })
  }

  ngOnDestroy(){
    this.observableSubscription.forEach(item => {
      item.unsubscribe();
      console.log(item, 'unsubscribed');
    });
  }


  save(_$event:any):void{
      this.formSubmitted = true;
      if(!this.songForm.valid){
         return;
      }
      count++;

      if (count < 6 || count >6) {
         this.saveSong();
         this.router.navigate(['/songs']);
         alert("Do yo want to save this song?");
      }
      else{
        alert("Song not saved, you have added 5 songs already try it later");
      }

  }



  saveSong():void{
    const song =new Song();
    // map data from form to Song
    song.id = this.songForm.get('id').value;
    song.title = this.songForm.get('title').value;
    song.artist = this.songForm.get('artist').value;
    song.date =  this.getLookupObjFromCode(this.songForm.get('date').value);
    song.price =  this.songForm.get('price').value;


    // save to database
    if(song.id == 0){
      this.songService.addNewSong(song);}
      else {
        this.songService.updateSong(song);
      }
  }


  getLookupObjFromCode(date:number):Lookup{
    var lookup:Lookup = null;
    const subscription = this.date.subscribe(lookups => {
      lookup  = lookups.find(item => item.date == date)
    })
    subscription.unsubscribe();
    return lookup;
  }

}
