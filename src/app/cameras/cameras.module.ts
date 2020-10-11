import { NgModule } from '@angular/core';
import { CamerasComponent } from './cameras/cameras.component';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CameraService } from '../shared/services/camera.service';
import { CameraComponent } from './camera/camera.component'
import { AuthGuard } from '../shared/guards/auth.guard'
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: CamerasComponent, canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [CamerasComponent, CameraComponent],
  imports: [
    TranslateModule,
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [CameraService, AuthGuard]
})
export class CamerasModule { }
