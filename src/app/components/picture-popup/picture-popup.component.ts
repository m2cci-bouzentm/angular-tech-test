import { Component } from '@angular/core';
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

  imageUrl: string = '';

  get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  snapshot(event: WebcamImage) {
    console.log('Snapshot taken', event);
    this.imageUrl = event.imageAsDataUrl;
  }

  closePopup() {
    document.getElementById('cameraPopup')?.classList.add('hidden');
  }

  takePicture() {
    this.trigger.next();
  }

  savePicture() {
    this.sharedService.analysisImageUrl = this.imageUrl;
    this.closePopup();
  }

  tryAgain() {
    this.imageUrl = '';
  }
}
