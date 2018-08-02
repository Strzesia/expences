import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../models/category';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.less']
})
export class AddCategoryComponent implements OnInit {

  categories : Category[];
  @Input() category : Category;
  categoryForm : FormGroup;

  @Output() addedCategory : EventEmitter<Category> = new EventEmitter<Category>();

  constructor(
    private categoriesService : CategoriesService,
    private formBuilder : FormBuilder
  ) { }

  ngOnInit() {
    this.categoryForm = this.buildCategoryForm();
  }

  buildCategoryForm() {
    return this.formBuilder.group({
      name: ["", Validators.required]
    })
  }

  loadCategories() : void {
    this.categoriesService.getCategories().subscribe((categories) => {
      this.categories = categories;
    })
  }

  addCategory(newCategory:Category) : void {
    console.log("emituję: "+ newCategory);
    this.addedCategory.emit(newCategory);
  }

}
