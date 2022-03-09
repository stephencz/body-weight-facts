import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthGlanceComponent } from './health-glance.component';

describe('HealthGlanceComponent', () => {
  let component: HealthGlanceComponent;
  let fixture: ComponentFixture<HealthGlanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthGlanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthGlanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
