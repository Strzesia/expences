import { Component, OnInit, Input } from '@angular/core';
import { CategoriesService } from '../../categories.service';
import { Category } from '../../models/category';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-categories-settings',
  templateUrl: './categories-settings.component.html',
  styleUrls: ['./categories-settings.component.less']
})
export class CategoriesSettingsComponent implements OnInit {

  categories : Category[];
  @Input() category : Category;
  categoryForm : FormGroup;

  constructor(
    private categoriesService : CategoriesService,
    private formBuilder : FormBuilder,
  ) { }

  buildCategoryForm() {
    return this.formBuilder.group({
      name: [this.category.name, Validators.required]
    })
  }

  ngOnInit() {
    this.categoryForm = this.buildCategoryForm();
  }

  loadCategories() : void {
    this.categoriesService.getCategories().subscribe((categories) => {
      this.categories = categories;
    })
  }

  editCategory() {
    this.categoriesService.editCategory(this.category.id, this.categoryForm.value).subscribe(() => {
    })
  }
  
}
