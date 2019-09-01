import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

import { SearchService } from '../search-service/search.service';
// import { Repo } from '../repo';
// import { Git } from '../git-class/git';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:any;
  reposits:any;
  username: string;


constructor(private search:SearchService) {
  this.search.getPersonalInfo().subscribe(data=>{
    console.log(data)
    this.profile=data;
  });
  this.search.getProfileRepos().subscribe(repo=>{
    console.log(repo);
    this.reposits=repo;
  })
 }
 profileUser(){
   this.search.upDateUser(this.username);
   this.search.getPersonalInfo().subscribe(data=>{
    console.log(data)
    this.profile=data;
  });
  this.search.getProfileRepos().subscribe(repo=>{
    console.log(repo);
    this.reposits=repo;
  })
 }

ngOnInit() {
  

  }
}















































// export class ProfileComponent implements OnInit {
  
//   // repos:Repo;
//   // users:Git;
//   // public profileName='amandinek';
//   // public myRepo:any;
//   // public searchRepos: any;
//   //   // public resultCount = 12;
     
  
//     profile;
//     reposits:any;
//     username: string;


//   constructor(private gitHubReposRequest:SearchService,public userRepos:SearchService) {
    
//    }
//   // ngOnInit(){
//   //   this.gitHubReposRequest.gitHubRepos(this.profileName);
//   //   this.users=this.gitHubReposRequest.users;
//   //   this.userRepos.gitHubRepos(this.profileName)
//   //   console.log(this.userRepos)
//   // }
//    profileUser(){
//      this.search.upDateUser(this.username);
//      this.search.getPersonalInfo().subscribe(data=>{
//       console.log(data)
//       this.profile=data;
//     });
//     this.search.getProfileRepos().subscribe(repo=>{
//       console.log(repo);
//       this.reposits=repo;
//     })
//    }

//   ngOnInit() {
    

//     }
//   }


