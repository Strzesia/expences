import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../categories.service';
import { Category } from '../../models/category';

@Component({
  selector: 'app-categories-overview',
  templateUrl: './categories-overview.component.html',
  styleUrls: ['./categories-overview.component.less']
})
export class CategoriesOverviewComponent implements OnInit {

  categories : Category[];
  category : Category;

  constructor(
    private categoriesService : CategoriesService
  ) { }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() : void {
    this.categoriesService.getCategories().subscribe((categories) => {
      this.categories = categories;
    })
  }

}
