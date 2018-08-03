import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { Category } from '../../models/category';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.less']
})
export class CategoryComponent implements OnInit {

  @Output() edited: EventEmitter<Category> = new EventEmitter<Category>();
  @Output() deleted: EventEmitter<Category> = new EventEmitter<Category>();

  @Input() category: Category;

  categories: Category[];
  categoryForm: FormGroup;
  editFormOpened: boolean = false;

  constructor(
    private categoriesService: CategoriesService,
    private formBuilder: FormBuilder,
  ) { }

  buildCategoryForm() {
    return this.formBuilder.group({
      name: [this.category.name]
    })
  }

  ngOnInit() {
  }

  onEditClick(editedCategory: Category) {
    editedCategory.id = this.category.id;
    this.edited.emit(editedCategory);
  }

  onDeleteClick() {
    this.deleted.emit(this.category);
  }

  closeForm(data): void {
    this.editFormOpened = data;
  }
}