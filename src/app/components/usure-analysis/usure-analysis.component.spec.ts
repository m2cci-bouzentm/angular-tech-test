import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsureAnalysisComponent } from './usure-analysis.component';

describe('UsureAnalysisComponent', () => {
  let component: UsureAnalysisComponent;
  let fixture: ComponentFixture<UsureAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsureAnalysisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsureAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
