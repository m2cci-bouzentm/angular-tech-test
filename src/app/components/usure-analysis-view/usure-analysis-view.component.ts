import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { TyreType, UsureAnalysis } from '../../../types';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-usure-analysis-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usure-analysis-view.component.html',
  styleUrl: './usure-analysis-view.component.css',
})
export class UsureAnalysisViewComponent {
  public sharedService: SharedService;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    sharedService: SharedService
  ) {
    this.sharedService = sharedService;
  }

  usureAnalysis: UsureAnalysis = {
    id: 0,
    vehicle: 'string',
    rate: 'A',
    imagesUrl: [],
  };
  usureAnalysisId!: number;

  getTyreImageLabel(index: number): string {
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
      this.usureAnalysisId = Number(params['id']);
    });

    const localStorageItem = localStorage.getItem('usureAnalysis');
    const getAnalysis: UsureAnalysis[] = localStorageItem
      ? JSON.parse(localStorageItem)
      : [];

    for (const usureAnalysis of getAnalysis) {
      if (usureAnalysis.id === this.usureAnalysisId) {
        this.usureAnalysis = usureAnalysis;
        break;
      }
    }
  }
}
