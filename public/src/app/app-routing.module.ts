import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagePlayerComponent } from './manage-player/manage-player.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { PlayerListComponent } from "./player-list/player-list.component";
import { PlayerStatusComponent } from './player-status/player-status.component';
import { GameStatusComponent } from './game-status/game-status.component';


const routes: Routes = [
  {path: 'managePlayer', pathMatch:'full', component: ManagePlayerComponent},
  {path: 'manageStatus', pathMatch:'full', component: PlayerStatusComponent},    
  {path: 'list', pathMatch:'full', component: PlayerListComponent},
  {path: 'addPlayer', pathMatch:'full', component: AddPlayerComponent},    


  ];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
