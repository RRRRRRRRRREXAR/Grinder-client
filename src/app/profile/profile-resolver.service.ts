import { ProfileComponent } from './profile.component';
import { UserService } from './../user.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { ProfileModel } from '../models/ProfileModel';


@Injectable({
  providedIn: 'root'
})
export class ProfileResolverService implements Resolve<ProfileModel> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProfileModel> | Observable<never> {
    let email = route.paramMap.get('currentUser.token.username');
    return this.userService.getProfile(email).pipe(
      take(1),
      mergeMap(profile => {
        if (profile) {
          return of(profile);
        }
        else {
          this.router.navigate(['']);
          return EMPTY;
        }
      })
    )
  }

  constructor(private userService: UserService, private router: Router) { }
}
