import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpencesTableComponent } from './expences-table/expences-table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ExpencesTableComponent
  ],
  declarations: [
    ExpencesTableComponent
  ]
})
export class ExpencesOverviewModule { }
