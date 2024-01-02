import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../models/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-pages.component.html',
  styles: [
  ]
})
export class HomePagesComponent {

  constructor( private _gifsService: GifsService ) {}

  get gifs(): Gif[] {
    return this._gifsService.giftList;
  }

}
