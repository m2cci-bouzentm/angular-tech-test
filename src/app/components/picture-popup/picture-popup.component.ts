import { Component, Input } from '@angular/core';
import { WebcamImage, WebcamModule } from 'ngx-webcam';
import { SharedService } from '../../services/shared.service';
import { NgIf } from '@angular/common';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-picture-popup',
  standalone: true,
  imports: [WebcamModule, NgIf],
  templateUrl: './picture-popup.component.html',
  styleUrl: './picture-popup.component.css',
})
export class PicturePopupComponent {
  public sharedService: SharedService;

  constructor(sharedService: SharedService) {
    this.sharedService = sharedService;
  }

  trigger: Subject<void> = new Subject<void>();

  capturedImgUrl: string = '';

  get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  snapshot(event: WebcamImage) {
    console.log('Snapshot taken', event);
    this.capturedImgUrl = event.imageAsDataUrl;
  }

  closePopup() {
    document.getElementById('cameraPopup')?.classList.add('hidden');
  }

  takePicture() {
    this.trigger.next();
  }

  savePicture() {
    const targetedTyre = this.sharedService.targetedTyre;
    this.sharedService.analysisImagesUrl[targetedTyre] = this.capturedImgUrl;
    document.getElementById('cameraPopup')?.classList.add('hidden');
    this.capturedImgUrl = '';
  }

  tryAgain() {
    this.capturedImgUrl = '';
  }
}
