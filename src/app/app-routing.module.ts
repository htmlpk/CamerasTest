import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from './app.module';

const routes: Routes = [
  {
    path: '',
    redirectTo:"auth",pathMatch:"full"
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'cameras',
    loadChildren: () => import('../app/cameras/cameras.module').then(m => m.CamerasModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('../app/profile/profile.module').then(m => m.ProfileModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    TranslateModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
