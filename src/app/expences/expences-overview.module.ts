import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpencesTableComponent } from './expences-table/expences-table.component';
import { SharedModule } from '../shared/shared.module';
import { ExpencesOverviewComponent } from './expences-overview/expences-overview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExpencesTableRowComponent } from './expences-table-row/expences-table-row.component';
import { ExpencesTableRowEditComponent } from './expences-table-row-edit/expences-table-row-edit.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ExpencesTableComponent
  ],
  declarations: [
    ExpencesTableComponent,
    ExpencesOverviewComponent,
    ExpencesTableRowComponent,
    ExpencesTableRowEditComponent
  ]
})
export class ExpencesOverviewModule { }
