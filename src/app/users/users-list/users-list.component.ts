import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserEntityService } from '../services/user-entity.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent implements OnInit {
  columnsToDisplay = ['name', 'email'];

  users$: Observable<User[]>;

  constructor(
    private route: ActivatedRoute,
    private usersService: UserEntityService
  ) {}

  ngOnInit(): void {
    this.users$ = this.usersService.entities$;
  }
}
