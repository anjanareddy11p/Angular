import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageModel } from '../model/message';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class HelloWorldService {

    private APIURL:any;
    constructor(private http:HttpClient) {
      this.APIURL = 'http://localhost:8080/welcome';
    }
    public getData(): Observable<string> {
       return this.http.get(this.APIURL,{responseType: 'text'});}
}
