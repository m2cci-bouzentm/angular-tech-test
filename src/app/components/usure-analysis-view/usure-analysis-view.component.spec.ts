import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsureAnalysisViewComponent } from './usure-analysis-view.component';

describe('UsureAnalysisViewComponent', () => {
  let component: UsureAnalysisViewComponent;
  let fixture: ComponentFixture<UsureAnalysisViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsureAnalysisViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsureAnalysisViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
