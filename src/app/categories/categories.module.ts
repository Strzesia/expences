import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesOverviewComponent } from './categories-overview/categories-overview.component';
import { CategoryComponent } from './category/category.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    EditCategoryComponent,
    CategoriesOverviewComponent,
    CategoryComponent
  ],
  declarations: [
    EditCategoryComponent,
    CategoriesOverviewComponent,
    CategoryComponent,
    AddCategoryComponent
  ]
})
export class CategoriesModule { }
