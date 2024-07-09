import { Injectable } from '@angular/core';
import { UsureAnalysis, ReferenceAnalysis } from '../../types';
import { UsureService } from './usure.service';
import { ReferenceService } from './reference.service';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(
    private usureService: UsureService,
    private referenceService: ReferenceService
  ) {}

  usureAnalysis: UsureAnalysis[] = [];
  referenceAnalysis: ReferenceAnalysis[] = [];

  camPermission: boolean = false;
  analysisImageUrl: string = '';

  getUsureAnalysis() {
    this.usureService.get().subscribe({
      next: (data: UsureAnalysis[]) => {
        console.log(data);
        this.usureAnalysis = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  getReferenceAnalysis() {
    this.referenceService.get().subscribe({
      next: (data: ReferenceAnalysis[]) => {
        console.log(data);
        this.referenceAnalysis = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  goBack() {
    window.history.back();
  }

  getCamPermission() {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        console.log('Camera permission granted');
        this.camPermission = true;
      })
      .catch((err) => {
        console.log('Camera permission denied');
        this.camPermission = false;
      });
  }

  openPopup() {
    document.getElementById('cameraPopup')?.classList.remove('hidden');
    this.getCamPermission();
  }
}
