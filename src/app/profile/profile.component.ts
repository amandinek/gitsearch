import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Git } from '../git-class/git';
import { SearchService } from '../search-service/search.service';
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


