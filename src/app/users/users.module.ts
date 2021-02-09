import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { UserSRoutingModule } from './users-routing.module';



@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    UserSRoutingModule
  ],
  exports:[ListComponent]
})
export class UsersModule { }
