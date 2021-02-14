import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { UserComponent } from './user/user.component';
import { UsersResolver } from './services/users.resolver';

export const usersRoutes: Routes = [
  {
    path: '',
    component: UsersListComponent,
    resolve: {
      users: UsersResolver
    }
  },
  {
    path: ':userId',
    component: UserComponent,
    resolve: {
      users: UsersResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(usersRoutes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
