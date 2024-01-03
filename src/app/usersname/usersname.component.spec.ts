import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersnameComponent } from './usersname.component';

describe('UsersnameComponent', () => {
  let component: UsersnameComponent;
  let fixture: ComponentFixture<UsersnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersnameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
