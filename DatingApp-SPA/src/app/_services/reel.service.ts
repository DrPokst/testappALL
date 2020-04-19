import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reels } from '../_models/Reels';

@Injectable({
  providedIn: 'root'
})
export class ReelService {
  baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }

getReels(): Observable<Reels[]>{
  return this.http.get<Reels[]>(this.baseUrl + 'reel');
}
getReel(id): Observable<Reels>{
  return this.http.get<Reels>(this.baseUrl + 'reel/' + id);
}
updateReel(id: number, reel: Reels){
  return this.http.put(this.baseUrl + 'reel/' + id, reel);
}
}
