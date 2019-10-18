import { FriendsComponent } from './friends/friends.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileImagesComponent } from './profile-images/profile-images.component';

import { ProfileResolverService } from './profile/profile-resolver.service';
import { UpdateProfileResolverService } from './update-profile/update-profile-resolver.service';
import { UploadProfilePictureComponent } from './upload-profile-picture/upload-profile-picture.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { SearchComponent } from './search/search.component';
import { InvitesComponent } from './invites/invites.component';
import { FriendsService } from './friends.service';
import { MessagesComponent } from './messages/messages.component';
import { DialogComponent } from './dialog/dialog.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  {
    path: 'updateprofile', component: UpdateProfileComponent, resolve: {
      updateprofile: UpdateProfileResolverService
    }
  },

  {
    path: 'updateprofileimages', component: ProfileImagesComponent
  },
  {
    path: 'changepassword', component: ChangePasswordComponent
  },
  {
    path: 'find', component: SearchComponent
  },
  { path: 'uploadprofilepicture', component: UploadProfilePictureComponent },
  {
    path: 'invites', component: InvitesComponent
  },
  {
    path: 'friends', component: FriendsComponent
  },
  {
    path: 'messages', component: MessagesComponent,
  },
  {
    path: 'dialog', component: DialogComponent
  },
  {
    path: ':currentUser.token.username', component: ProfileComponent,
    resolve: {
      profile: ProfileResolverService
    }
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
