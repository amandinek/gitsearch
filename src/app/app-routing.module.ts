import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepositoryComponent } from './repository/repository.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
    { path: 'profile', component: ProfileComponent},
    { path: 'repository', component: RepositoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
