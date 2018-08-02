import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpencesTableComponent } from './expences-table/expences-table.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ExpencesTableComponent
  ],
  declarations: [
    ExpencesTableComponent
  ]
})
export class ExpencesOverviewModule { }
