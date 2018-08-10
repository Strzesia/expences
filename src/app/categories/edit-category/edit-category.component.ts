import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { Category } from '../../models/category';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.less']
})
export class EditCategoryComponent implements OnInit {

  categories: Category[];
  @Input() category: Category;
  categoryForm: FormGroup;
  @Output("opened") opened: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() editedCategory: EventEmitter<Category> = new EventEmitter<Category>();

  constructor(
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

  closeEditForm(): void {
    this.opened.emit(false);
  }

  onEditClick(editedCategory: Category) {
    this.editedCategory.emit(editedCategory);
    this.closeEditForm();
  }

}
