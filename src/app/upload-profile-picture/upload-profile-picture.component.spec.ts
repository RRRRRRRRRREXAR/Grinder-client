import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadProfilePictureComponent } from './update-profile-picture.component';

describe('UpdateProfilePictureComponent', () => {
  let component: UploadProfilePictureComponent;
  let fixture: ComponentFixture<UploadProfilePictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadProfilePictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadProfilePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
