import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UserComponent } from './user/user.component';
import { UsersRoutingModule } from './users-routing.module';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {EntityDataService, EntityDefinitionService, EntityMetadataMap} from '@ngrx/data';
import {UsersDataService} from './services/users-data.service';

const entityMetadata: EntityMetadataMap = {
  User: {},
};

@NgModule({
  declarations: [
    UsersListComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatTableModule,
    MatCardModule
  ]
})
export class UsersModule {
  constructor(
    private eds: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private usersDataService: UsersDataService) {

    eds.registerMetadataMap(entityMetadata);

    entityDataService.registerService('User', usersDataService);
  }
}
