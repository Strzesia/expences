import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpencesTableComponent } from './expences-table/expences-table.component';
import { SharedModule } from '../shared/shared.module';
import { ExpencesOverviewComponent } from './expences-overview/expences-overview.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    ExpencesTableComponent
  ],
  declarations: [
    ExpencesTableComponent,
    ExpencesOverviewComponent
  ]
})
export class ExpencesOverviewModule { }
