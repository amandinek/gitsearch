import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repo } from '../repo';
import { Git } from '../git-class/git';
// import { resolve } from 'url';
// import { promise } from 'protractor';
// import { Git } from '../git-class/git';

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





















































































// export class SearchService {
//   repos:Repo;
//   users:Git;
//   newRepo:any;
//   searchRepos:any;
//   private username:string;
//   private clientId="5002525f535295821679";
//   private clientSecret="c36ee9c48419d167bc0fa0adee0f0beb25d03f4b";
//   // public token='51436912c20e534c8d6929744b213a4acbba708e';
//   constructor(public http:HttpClient) { 
//   //   this.users = new Git('','','',0,'',new Date(),'',0,0);
//   //   this.repos = new Repo('','','',new Date());
//     // this.username="amandinek"

//   // }
//   // gitProfile(profileName){
//   //   interface ApiResponse{
//   //     name: string;
//   //     login:string;
//   //     html_url:any;
//   //     description:any;
//   //     created_at:Date;
      
//   //     public_repos:number;
//   //     followers:number;
//   //     following:number;
//   //     avatar_url:string;
//   //     hireable:string;
//   //   }
  
//   // const promise =new Promise((resolve)=>{
//   //   this.http.get<ApiResponse>("https://api.github.com/users/"+ profileName + + 'access_token=' + this.token).toPromise().then(getResponse=>{
//   //     this.users.name =getResponse.name;
//   //     this.users.html_url = getResponse.html_url;
//   //     this.users.login = getResponse.login;
//   //     this.users.avatar_url =getResponse.avatar_url;
//   //     this.users.public_repos =getResponse.public_repos;
//   //     this.users.created_at =getResponse.created_at;
//   //     this.users.hireable =getResponse.hireable;
//   //     this.users.followers = getResponse.followers;
//   //     this.users.following = getResponse.following
//   //     resolve();
//   //   },);
//   // });
//   // return promise
//   // }

//   // gitHubRepos(myRepo){
//   //   interface ApiResponse{
//   //     name:string;
//   //     description:string;
//   //     created_at:Date;
//   //   }
//   //   const newPromise = new Promise((resolve,reject)=>{
//   //     this.http.get<ApiResponse>("https://api.github.com/users/"+ myRepo + '/repos?order=created&sort=asc?access_token=' + this.token).toPromise().then(getResponse=>{
//   //       this.repos.description=getResponse;
//   //       resolve();
//   //     },error=>{
//   //       reject(error);
//   //     });
//   //     });
//   //     return newPromise;
//   //   }

//   //  allRepos(myRepo){
//   //    interface ApiResponse{
//   //      items:any;
//   //    }
//   //    const thePromise = new Promise((resolve,reject)=>{
//   //      this.http.get<ApiResponse>("https://api.github.com/users/"+ myRepo + ' &per_page=10 ' + this.token).toPromise().then(getResponse=>{
//   //        this.searchRepos=getResponse.items;
//   //        resolve();

//   //      }, error=>{
//   //        this.searchRepos='error';
//   //        reject(error);
//   //      })
//   //    })
//   //    return thePromise
//   //  }
//   // }

//   getPersonalInfo(){
//     return this.http.get("https://api.github.com/users/"+ this.username + "?client_id="+ this.clientId + "&client_secret="+this.clientSecret)
//   }

//   getProfileRepos(){
//     return this.http.get("https://api.github.com/users/"+ this.username + "/repos?client_id="+ this.clientId + "&client_secret="+this.clientSecret)
//   }
//   upDateUser(username:string){
//     this.username=username;
//   }
// }

