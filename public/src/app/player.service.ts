import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Player } from './player';

@Injectable()
export class PlayerService {

  constructor(private _http: Http) { }

  createPlayer(player){
    return this._http.post('/api/create', player).map(data =>data.json()).toPromise
  }

}
