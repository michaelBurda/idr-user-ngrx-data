import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { UserEntityService } from './user-entity.service';
import { Observable } from 'rxjs';
import { filter, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersResolver implements Resolve<boolean>{

  constructor(private usersService: UserEntityService) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<boolean> {
    return this.usersService.loaded$
      .pipe(
        tap(loaded => {
          if (!loaded) {
            this.usersService.getAll();
          }
        }),
        filter(loaded => !!loaded),
        first()
      );
  }
}
