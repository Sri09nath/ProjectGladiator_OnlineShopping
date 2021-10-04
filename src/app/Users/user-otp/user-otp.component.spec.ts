import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOTPComponent } from './user-otp.component';

describe('UserOTPComponent', () => {
  let component: UserOTPComponent;
  let fixture: ComponentFixture<UserOTPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserOTPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOTPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
