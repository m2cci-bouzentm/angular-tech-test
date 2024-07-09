import { Component } from '@angular/core';
import { ReferenceAnalysisComponent } from '../reference-analysis/reference-analysis.component';
import { UsureAnalysisComponent } from '../usure-analysis/usure-analysis.component';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';
import { ReferenceAnalysis, UsureAnalysis } from '../../../types';
import { UsureService } from '../../services/usure.service';
import { ReferenceService } from '../../services/reference.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    ReferenceAnalysisComponent,
    UsureAnalysisComponent,
    RouterModule,
    NgFor,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  public sharedService: SharedService;

  constructor(sharedService: SharedService) {
    this.sharedService = sharedService;
  }

  ngOnInit() {
    this.sharedService.getUsureAnalysis();
    this.sharedService.getReferenceAnalysis();
  }
}
