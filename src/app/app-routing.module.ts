import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: '@pages/home/home.module#HomeModule'
  },
  {
    path: 'user',
    loadChildren: '@pages/user/user.module#UserModule'
  },
  {
    path: 'repository',
    loadChildren: '@pages/repository/repository.module#RepositoryModule'
  },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
