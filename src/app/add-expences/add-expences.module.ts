import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetDateComponent } from './set-date/set-date.component';
import { AddExpencesComponent } from './add-expences/add-expences.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddFormComponent } from './add-form/add-form.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SetDateComponent,
    AddExpencesComponent,
    AddFormComponent
  ]
})
export class AddExpencesModule { }
