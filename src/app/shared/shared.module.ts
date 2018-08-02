import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ExpencesEditFormComponent } from '../expences-overview/expences-edit-form/expences-edit-form.component';
import { NoopAnimationPlayer } from '@angular/animations';

@NgModule({
  imports: [
    CommonModule
    ],
  exports: [
    HeaderComponent,
    ExpencesEditFormComponent
  ],
  declarations: [
    ExpencesEditFormComponent,
    HeaderComponent
  ]
})
export class SharedModule { }