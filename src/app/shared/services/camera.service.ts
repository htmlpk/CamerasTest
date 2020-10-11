import { Injectable } from '@angular/core';
import { CameraStatus } from '../enums/camera-status.enum';
import { CameraSet } from '../models/camera-set.model';
import { from, Observable, } from 'rxjs';
import { randomEnum } from '../../shared/helpers/random-enum.helper'

@Injectable()
export class CameraService {

  constructor() {
  }

  public get(): Observable<CameraSet> {
    const promise = new Promise<CameraSet>((resolve, reject) => {
      resolve(this.getMockCameras());
    });
    return from(promise);
  }

  private getMockCameras(): CameraSet {
    return {
      lenght: 7,
      cameras:
        [
          {
            name: "Camera 0",
            url: "https://1gai.ru/uploads/posts/2017-12/1513529075_00001.jpg",
            status: randomEnum(CameraStatus)
          },
          {
            name: "Camera 1",
            url: "https://mapcam.info/users_data/photo_sc/968042_ffb90486695984c4904aba77e9d13543.jpg",
            status: randomEnum(CameraStatus)
          },
          {
            name: "Camera 2",
            url: "https://www.zr.ru/_ah/img/mBaR9VJf9u_e31QzM6LVdw",
            status: randomEnum(CameraStatus)
          },
          {
            name: "Camera 3",
            url: "https://cdn.iz.ru/sites/default/files/styles/900x506/public/photo_item-2018-11/3_1_0.jpg?itok=-bD9XH5d",
            status: randomEnum(CameraStatus)
          },
          {
            name: "Camera 4",
            url: "https://carakoom.com/data/wall/787/6006e3a6.jpg",
            status: randomEnum(CameraStatus)
          },
          {
            name: "Camera 5",
            url: "https://carsguru.net/clf/20/2d/12/16/news.6fa160204e8b8464.jpeg",
            status: randomEnum(CameraStatus)
          },
          {
            name: "Camera 6",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-umdh80WrFitkoUdD8bT18dzvPIqX9R1kcw&usqp=CAU",
            status: randomEnum(CameraStatus)
          }
        ]
    }
  }
}


