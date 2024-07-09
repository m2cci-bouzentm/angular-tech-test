import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { UsureAnalysisComponent } from './components/usure-analysis/usure-analysis.component';
import { ReferenceAnalysisComponent } from './components/reference-analysis/reference-analysis.component';

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
  // {path: '**', component: PageNotFoundComponent},
];
