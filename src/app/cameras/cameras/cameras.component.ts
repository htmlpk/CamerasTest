import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CameraSet } from 'src/app/shared/models/camera-set.model';
import { CameraService } from 'src/app/shared/services/camera.service';

@Component({
  selector: 'cameras',
  templateUrl: './cameras.component.html',
  styleUrls: ['./cameras.component.scss']
})
export class CamerasComponent implements OnInit, OnDestroy {
  private interval;
  public cameraSet: CameraSet;
  private ngUnsubscribe = new Subject();

  constructor(private cameraService: CameraService) { }

  ngOnInit(): void {
    this.cameraService.get().pipe(
      takeUntil(this.ngUnsubscribe)
    ).subscribe((res) => {
      this.cameraSet = res;
    });
    this.interval = setInterval(() => {
      this.cameraService.get().pipe(
        takeUntil(this.ngUnsubscribe)
      ).subscribe((res) => {
        this.cameraSet = res;
      })
    }, 500);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}


