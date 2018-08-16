import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagePlayerComponent } from './manage-player/manage-player.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { FormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http'; 
import { PlayerService } from "./player.service";
import { GameStatusComponent } from './game-status/game-status.component';
import { PlayerStatusComponent } from './player-status/player-status.component';
import { PlayerListComponent } from './player-list/player-list.component';
@NgModule({
  declarations: [
    AppComponent,
    ManagePlayerComponent,
    AddPlayerComponent,
    GameStatusComponent,
    PlayerStatusComponent,
    PlayerListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    PlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
