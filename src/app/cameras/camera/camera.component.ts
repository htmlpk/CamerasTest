import { Component, Input, OnInit } from '@angular/core';
import { CameraStatus } from 'src/app/shared/enums/camera-status.enum';
import { Camera } from 'src/app/shared/models/camera.model';

@Component({
  selector: 'camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {
  public  cameraStatus = CameraStatus;
  @Input() camera:Camera;

  constructor() {
  }

  ngOnInit(): void {
  }

}
