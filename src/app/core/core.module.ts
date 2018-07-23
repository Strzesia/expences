import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { DropdownModule } from 'ngx-dropdown';

@NgModule({
  imports: [
    CommonModule,
    DropdownModule
  ],
  exports: [
    MenuComponent
  ],
  declarations: [
    MenuComponent
  ]
})
export class CoreModule { };