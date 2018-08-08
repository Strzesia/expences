import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { Category } from '../../models/category';
import { Sort } from '../../shared/sort';

@Component({
  selector: 'app-categories-overview',
  templateUrl: './categories-overview.component.html',
  styleUrls: ['./categories-overview.component.less']
})
export class CategoriesOverviewComponent implements OnInit {

  categories: Category[];
  category: Category;
  newCategory: Category;
  closedAddCategory: boolean;
  sort: Sort = Sort.unsorted;

  constructor(
    private categoriesService: CategoriesService
  ) { }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoriesService.getCategories().subscribe(data => {
      this.categories = data;
    })
  }

  closeAddForm(data: boolean): void {
    this.closedAddCategory = data;
  }

  addCategory(newCategory: Category): void {
    this.categoriesService.addCategory(newCategory).subscribe(data => {
      this.loadCategories();
    })
  }

  editCategory(editedCategory: Category): void {
    this.categoriesService.editCategory(editedCategory.id, editedCategory).subscribe((category) => {
      this.loadCategories();
    })
  }

  deleteCategory(category: Category): void {
    this.categoriesService.deleteCategory(category.id).subscribe(() => {
      this.loadCategories();
    })
  }

  sortByName(categories: Category[]): Category[] {
    if (this.sort == Sort.byName){
      return categories.reverse();
    }
    this.sort = Sort.byName;
    return categories.sort((a,b) => a.name.localeCompare(b.name) );
  }

}