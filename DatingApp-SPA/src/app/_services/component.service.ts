import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Components } from '../_models/components';


@Injectable({
  providedIn: 'root'
})
export class ComponentService {
  baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }

getComponents(): Observable<Components[]>{
  return this.http.get<Components[]>(this.baseUrl + 'search')
}

getComponent(id): Observable<Components>{
  return this.http.get<Components>(this.baseUrl + 'search/' + id);
}
updateComponent(id: number, component: Components){
  return this.http.put(this.baseUrl + 'search/' + id, component);
}

registerComponent(model: any){
  return this.http.post(this.baseUrl + 'search/registercomponent', model);
}
}
