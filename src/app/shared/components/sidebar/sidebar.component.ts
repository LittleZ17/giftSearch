import { GifsService } from './../../../gifs/services/gifs.service';
import { Component } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  
  constructor( private gifService: GifsService ){}

  get tags(){
    return this.gifService.tagsHistory;
  }

  searchTag(tag: string):void{
    this.gifService.searchTag(tag);
  }
  

}
