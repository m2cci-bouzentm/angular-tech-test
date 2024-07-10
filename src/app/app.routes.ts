import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { UsureAnalysisComponent } from './components/usure-analysis/usure-analysis.component';
import { ReferenceAnalysisComponent } from './components/reference-analysis/reference-analysis.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UsureAnalysisViewComponent } from './components/usure-analysis-view/usure-analysis-view.component';
import { ReferenceAnalysisViewComponent } from './components/reference-analysis-view/reference-analysis-view.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'usure',
    component: UsureAnalysisComponent,
  },
  {
    path: 'reference',
    component: ReferenceAnalysisComponent,
  },
  {
    path: 'usure/:id',
    component: UsureAnalysisViewComponent,
  },
  {
    path: 'reference/:id',
    component: ReferenceAnalysisViewComponent,
  },
  { path: '**', component: NotFoundComponent },
];
