import { Component } from '@angular/core';
import { ReferenceAnalysisComponent } from '../reference-analysis/reference-analysis.component';
import { UsureAnalysisComponent } from '../usure-analysis/usure-analysis.component';
import { RouterModule } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    ReferenceAnalysisComponent,
    UsureAnalysisComponent,
    RouterModule,
    NgFor,
    NgIf,
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
