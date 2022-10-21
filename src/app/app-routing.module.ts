import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { LoginComponent } from './components/login/login.component';
import { GetGenreResolver } from './libs/resolvers/get-genre.resolver';
import { AuthGuard } from './services/guards/auth.guard';
import { BlockLoginGuard } from './services/guards/block-login.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [BlockLoginGuard]
  },
  {
    path: 'games',
    component: FirstComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'games/genres/:id',
    component: FirstComponent,
    canActivate: [AuthGuard],
    resolve: {
      genre: GetGenreResolver
    }
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
