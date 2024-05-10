import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoModalComponentComponent } from './user-info-modal-component.component';

describe('UserInfoModalComponentComponent', () => {
  let component: UserInfoModalComponentComponent;
  let fixture: ComponentFixture<UserInfoModalComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserInfoModalComponentComponent]
    });
    fixture = TestBed.createComponent(UserInfoModalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
