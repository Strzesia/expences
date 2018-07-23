import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../categories.service';
import { Category } from '../../models/category';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-categories-settings',
  templateUrl: './categories-settings.component.html',
  styleUrls: ['./categories-settings.component.less']
})
export class CategoriesSettingsComponent implements OnInit {

  categories : Category[];
  category : Category;
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
  
  loadCategories() : void {
    this.categoriesService.getCategories().subscribe((categories) => {
      this.categories = categories;
    })
  }

  deleteCategory(category : Category, event) : void {
    this.categoriesService.deleteCategory(category.id).subscribe(() => {
      this.loadCategories();
    })
  }
  
  editCategory() {
    this.categoriesService.editCategory(this.category.id, this.categoryForm.value).subscribe(() => {})
  }

}
