import { Gif } from './../../models/gifs.interfaces';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  // styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {

@Input()
public gifs: Gif[] = []

}
