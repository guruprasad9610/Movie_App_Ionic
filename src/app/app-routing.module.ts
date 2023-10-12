import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IntroGuard } from './AuthGuards/intro.guard';
import { AutoLoginGuard } from './AuthGuards/auto-login.guard';
import { AuthGuard } from './AuthGuards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'swipers',
    pathMatch: 'full'
  },
  {
    path: 'swipers',
    loadChildren: () => import('./pages/swipers/swipers.module').then( m => m.SwipersPageModule)
  },
  {
    path: 'movies',
    loadChildren: () => import('./pages/movies/movies.module').then( m => m.MoviesPageModule),
    // canLoad: [AuthGuard]
  },
  {
    path: 'movies/:id',
    loadChildren: () => import('./pages/movie-details/movie-details.module').then( m => m.MovieDetailsPageModule),
    // canLoad: [AuthGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
