import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private username:string;
  private clientId="5002525f535295821679";
  private clientSecret="c36ee9c48419d167bc0fa0adee0f0beb25d03f4b";

  constructor(private http:HttpClient) { 
    this.username="amandinek"
  }
  getPersonalInfo(){
    return this.http.get("https://api.github.com/users/"+ this.username + "?client_id="+ this.clientId + "&client_secret="+this.clientSecret)
  }

  getProfileRepos(){
    return this.http.get("https://api.github.com/users/"+ this.username + "/repos?client_id="+ this.clientId + "&client_secret="+this.clientSecret)
  }
  upDateUser(username:string){
    this.username=username;
  }
}
