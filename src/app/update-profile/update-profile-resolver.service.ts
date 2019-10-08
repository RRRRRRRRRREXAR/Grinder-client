import { UserService } from './../user.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { UpdateProfileModel } from '../models/UpdateProfileModel';

@Injectable({
  providedIn: 'root'
})
export class UpdateProfileResolverService implements Resolve<UpdateProfileModel> {
  constructor(private router: Router, private userService: UserService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UpdateProfileModel> | Observable<never> {
    return this.userService.getCurrentUser().pipe(
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


}
