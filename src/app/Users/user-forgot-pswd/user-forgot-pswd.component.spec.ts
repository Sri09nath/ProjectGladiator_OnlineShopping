import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserForgotPswdComponent } from './user-forgot-pswd.component';

describe('UserForgotPswdComponent', () => {
  let component: UserForgotPswdComponent;
  let fixture: ComponentFixture<UserForgotPswdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserForgotPswdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserForgotPswdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
