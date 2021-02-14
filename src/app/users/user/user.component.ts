import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import {map} from 'rxjs/operators';
import {UserEntityService} from '../services/user-entity.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {
  user$: Observable<User>;

  constructor(
    private usersService: UserEntityService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('userId');

    this.user$ = this.usersService.entities$
      .pipe(
        map(users => users.find(user => user.id.toString() === userId))
      );
  }

  goBack(): void {
    this.location.back();
  }
}
