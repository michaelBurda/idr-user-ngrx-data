import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { UserComponent } from './user/user.component';

export const usersRoutes: Routes = [
  {
    path: '',
    component: UsersListComponent,
  },
  {
    path: ':userId',
    component: UserComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(usersRoutes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
