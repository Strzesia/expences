import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesSettingsComponent } from './categories-settings/categories-settings.component';
import { CategoriesOverviewComponent } from './categories-overview/categories-overview.component';
import { CategoryComponent } from './category/category.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    CategoriesSettingsComponent,
    CategoriesOverviewComponent,
    CategoryComponent
  ],
  declarations: [CategoriesSettingsComponent, CategoriesOverviewComponent, CategoryComponent]
})
export class CategoriesModule { }
