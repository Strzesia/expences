import { Component, OnInit, Input } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { Category } from '../../models/category';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.less']
})
export class EditCategoryComponent implements OnInit {

  categories: Category[];
  @Input() category: Category;
  categoryForm: FormGroup;

  constructor(
    private categoriesService: CategoriesService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.categoryForm = this.buildCategoryForm();
  }

  buildCategoryForm() {
    return this.formBuilder.group({
      name: [this.category.name, Validators.required]
    })
  }

  loadCategories(): void {
    this.categoriesService.getCategories().subscribe((categories) => {
      this.categories = categories;
    })
  }

  editCategory() {
    this.categoriesService.editCategory(this.category.id, this.categoryForm.value).subscribe(() => {
      this.loadCategories();
    })
  }

  deleteCategory(category: Category, event): void {
    this.categoriesService.deleteCategory(category.id).subscribe(() => {
      this.loadCategories();
    })
  }

}
