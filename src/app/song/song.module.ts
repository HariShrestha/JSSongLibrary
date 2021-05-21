import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SongRoutingModule } from './song-routing.module';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [AddComponent, ListComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    SongRoutingModule
  ]
})
export class SongModule { }
