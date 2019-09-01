import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search-service/search.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
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
