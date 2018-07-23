import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetDateComponent } from './set-date/set-date.component';
import { AddExpencesComponent } from './add-expences/add-expences.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SetDateComponent, AddExpencesComponent]
})
export class AddExpencesModule { }
