import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceAnalysisViewComponent } from './reference-analysis-view.component';

describe('ReferenceAnalysisViewComponent', () => {
  let component: ReferenceAnalysisViewComponent;
  let fixture: ComponentFixture<ReferenceAnalysisViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferenceAnalysisViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferenceAnalysisViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
