import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { ReferenceAnalysis, TyreType } from '../../../types';

@Component({
  selector: 'app-reference-analysis-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reference-analysis-view.component.html',
  styleUrl: './reference-analysis-view.component.css',
})
export class ReferenceAnalysisViewComponent {
  public sharedService: SharedService;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    sharedService: SharedService
  ) {
    this.sharedService = sharedService;
  }

  referenceAnalysis: ReferenceAnalysis = {
    id: 0,
    vehicle: 'string',
    dimension: 'string',
    imagesUrl: [],
  };
  referenceAnalysisId!: number;

  getReferenceImageLabel(index: number): string {
    switch (index) {
      case TyreType.FrontLeft:
        return 'Avant Gauche';
      case TyreType.FrontRight:
        return 'Avant Droite';
      case TyreType.RearLeft:
        return 'Arrière Gauche';
      case TyreType.RearRight:
        return 'Arrière Droite';
      default:
        return '';
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.referenceAnalysisId = Number(params['id']);
    });

    const localStorageItem = localStorage.getItem('referenceAnalysis');
    const getAnalysis: ReferenceAnalysis[] = localStorageItem
      ? JSON.parse(localStorageItem)
      : [];

    for (const referenceAnalysis of getAnalysis) {
      if (referenceAnalysis.id === this.referenceAnalysisId) {
        this.referenceAnalysis = referenceAnalysis;
        break;
      }
    }
  }
}
