import { Component } from '@angular/core';
import { UsureService } from '../../services/usure.service';
import { UsureAnalysis, TyreType } from '../../../types';
import { PicturePopupComponent } from '../picture-popup/picture-popup.component';
import { SharedService } from '../../services/shared.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-usure-analysis',
  standalone: true,
  imports: [PicturePopupComponent, NgIf],
  templateUrl: './usure-analysis.component.html',
  styleUrl: './usure-analysis.component.css',
})
export class UsureAnalysisComponent {
  public sharedService: SharedService;

  constructor(
    private router: Router,
    private usureService: UsureService,
    sharedService: SharedService
  ) {
    this.sharedService = sharedService;
  }

  FrontLeft = TyreType.FrontLeft;
  FrontRight = TyreType.FrontRight;
  RearLeft = TyreType.RearLeft;
  RearRight = TyreType.RearRight;

  postUsureAnalysis(usureAnalysisObj: UsureAnalysis) {
    this.usureService.post(usureAnalysisObj).subscribe({
      next: (data: UsureAnalysis[]) => {
        console.log('Success', data);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  generateUsureAnalysisId(): number {
    let id: number;
    id = this.sharedService.usureAnalysis.reduce((acc, curr) => {
      if (curr.id > acc) {
        id = curr.id;
      }
      return id;
    }, 0);

    return id + 1;
  }

  onSubmit(event: SubmitEvent) {
    event.preventDefault();

    if (this.sharedService.analysisImagesUrl.length < 4) {
      alert('Veuillez télécharger les 4 images');
      return;
    }

    const form = event.target as HTMLFormElement;
    const usureAnalysisObj: UsureAnalysis = {
      id: this.generateUsureAnalysisId(),
      vehicle: form['vehicle'].value,
      rate: form['rate'].value,
      imagesUrl: this.sharedService.analysisImagesUrl,
    };

    console.log(usureAnalysisObj);
    this.postUsureAnalysis(usureAnalysisObj);
    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.sharedService.getUsureAnalysis();
  }
  ngOnDestroy() {
    this.sharedService.analysisImagesUrl = [];
  }
}
