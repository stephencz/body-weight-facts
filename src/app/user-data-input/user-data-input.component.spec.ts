import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDataInputComponent } from './user-data-input.component';

describe('UserDataInputComponent', () => {
  let component: UserDataInputComponent;
  let fixture: ComponentFixture<UserDataInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDataInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDataInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
