import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceAnalysisComponent } from './reference-analysis.component';

describe('ReferenceAnalysisComponent', () => {
  let component: ReferenceAnalysisComponent;
  let fixture: ComponentFixture<ReferenceAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferenceAnalysisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferenceAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
