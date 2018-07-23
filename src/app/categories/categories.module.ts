import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesSettingsComponent } from './categories-settings/categories-settings.component';
import { CategoriesOverviewComponent } from './categories-overview/categories-overview.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CategoriesSettingsComponent,
    CategoriesOverviewComponent
  ],
  declarations: [CategoriesSettingsComponent, CategoriesOverviewComponent]
})
export class CategoriesModule { }
