import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private username:string;
  
 
  constructor(private http:HttpClient) { 
    this.username="amandinek"
  }
  getPersonalInfo(){
    return this.http.get("https://api.github.com/users/"+ this.username + "?client_id="+ environment.clientId + "&client_secret="+environment.ClientKey)
  }
  getProfileRepos(){
    return this.http.get("https://api.github.com/users/"+ this.username + "/repos?client_id="+ environment.clientId + "&client_secret="+environment.ClientKey)
  }
  upDateUser(username:string){
    this.username=username;
  }
}