import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../models/category';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.less']
})
export class CategoryComponent implements OnInit {

  categories : Category[];
  @Input() category : Category;
  categoryForm : FormGroup;

  constructor(
    private categoriesService : CategoriesService,
    private formBuilder : FormBuilder,
  ) { }

  buildCategoryForm() {
    return this.formBuilder.group({
      name: [this.category.name]
    })
  }

  ngOnInit() {
  }

  editCategory() {
    this.categoriesService.editCategory(this.category.id, this.categoryForm.value).subscribe(() => {})
  }

  deleteCategory(category : Category, event) : void {
    this.categoriesService.deleteCategory(category.id).subscribe(() => {
    })
  }

}