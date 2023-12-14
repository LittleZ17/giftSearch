import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gift, SearchResponse } from '../models/gifs.interfaces';



@Injectable({providedIn: 'root'})
export class GifsService {

    public giftList: Gift[] = [];

    private _tagHistory:string[] = [];
    private apiKey = 'K903bjP2Gkx4LMd2YvVsvxmLrE94wgs7';
    private serviceUrl = 'http://api.giphy.com/v1/gifs'

    

    constructor(
        private http: HttpClient
    ) { }
    get tagsHistory(){
        return [...this._tagHistory];
    }

    private organizerTags(tag: string): void{
        tag = tag.toLowerCase();

        if(this._tagHistory.includes(tag)){
            this._tagHistory = this._tagHistory.filter((oldTag) => oldTag !== tag)
        }
        this._tagHistory.unshift(tag);
        this._tagHistory = this._tagHistory.splice(0, 10)
    }
    
    //! CON USO DE FETCH
    // async searchTag(tag: string): Promise<void>{
    //     if(tag.length === 0 || tag === ' ') return;
    //     this.organizerTags(tag);
    //     // this._tagHistory.unshift(tag);

    //     fetch('http://api.giphy.com/v1/gifs/search?api_key=K903bjP2Gkx4LMd2YvVsvxmLrE94wgs7&q=valorant&limit=10')
    //     .then(reso => reso.json())
    //     .then(data => console.log(data))
    // }

    searchTag(tag: string): void{
        if(tag.length === 0 || tag === ' ') return;
        this.organizerTags(tag);
        // this._tagHistory.unshift(tag);
        const params = new HttpParams()
        .set('api_key', this.apiKey)
        .set('q', tag)
        .set('limit', '10')

        this.http.get<SearchResponse>(`${this.serviceUrl}/search`, { params })
        .subscribe( resp => {
            console.log(resp.data)
            this.giftList = resp.data;
        })
    }

    
}