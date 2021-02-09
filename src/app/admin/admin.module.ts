import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionsComponent } from './actions/actions.component';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [ActionsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports:[ActionsComponent]
})
export class AdminModule { }
