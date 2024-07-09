import { Component } from '@angular/core';
import { ReferenceService } from '../../services/reference.service';
import { ReferenceAnalysis } from '../../../types';
import { PicturePopupComponent } from '../picture-popup/picture-popup.component';
import { SharedService } from '../../services/shared.service';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reference-analysis',
  standalone: true,
  imports: [PicturePopupComponent, NgIf],
  templateUrl: './reference-analysis.component.html',
  styleUrl: './reference-analysis.component.css',
})
export class ReferenceAnalysisComponent {
  public sharedService: SharedService;

  constructor(
    private router: Router,
    private referenceService: ReferenceService,
    sharedService: SharedService
  ) {
    this.sharedService = sharedService;
  }

  postReferenceAnalysis(referenceAnalysisObj: ReferenceAnalysis) {
    this.referenceService.post(referenceAnalysisObj).subscribe({
      next: (data: ReferenceAnalysis[]) => {
        console.log('Success', data);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  generateReferenceId(): number {
    let id: number;
    id = this.sharedService.referenceAnalysis.reduce((acc, curr) => {
      if (curr.id > acc) {
        id = curr.id;
      }
      return id;
    }, 0);

    return id + 1;
  }

  onSubmit(event: SubmitEvent) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const referenceAnalysisObj: ReferenceAnalysis = {
      id: this.generateReferenceId(),
      imageUrl: this.sharedService.analysisImageUrl,
      vehicle: form['vehicle'].value,
      dimension: form['dimension'].value,
    };

    if (referenceAnalysisObj.imageUrl === '') {
      return;
    }

    console.log(referenceAnalysisObj);
    this.postReferenceAnalysis(referenceAnalysisObj);
    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.sharedService.getReferenceAnalysis();
  }
}
