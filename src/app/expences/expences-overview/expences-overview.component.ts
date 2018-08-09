import { Component, OnInit } from '@angular/core';
import { ExpencesService } from '../../services/expences.service';
import { Expence } from '../../models/expence';
import { CategoriesService } from '../../services/categories.service';
import { Category } from '../../models/category';
import { ArraySorter } from '../../shared/sort';

@Component({
  selector: 'app-expences-overview',
  templateUrl: './expences-overview.component.html',
  styleUrls: ['./expences-overview.component.less']
})
export class ExpencesOverviewComponent implements OnInit {

  expences: Expence[];
  categories: Category[];
  arraySorter: ArraySorter = new ArraySorter();
  dayCheckbox: boolean;
  currentCategoryId: number = -1;

  constructor(
    private expencesService: ExpencesService,
    private categoriesServeice: CategoriesService
  ) { }

  ngOnInit() {
    this.loadExpences();
    this.loadCategories();
  }

  deleteExpence(expence: Expence):void {
    this.expencesService.deleteExpence(expence.id).subscribe(
      () => this.onCategoriesChange(this.currentCategoryId)
    )
  }

  loadCategories(): void {
    this.categoriesServeice.getCategories().subscribe((categories) => {
      this.arraySorter.sortCategoriesByName(categories);
      this.categories = categories;
    });
  } 

  loadExpences(): void {
    this.expencesService.getExpences().subscribe((expences) => {
      this.expences = expences;
    })
  }

  loadExpencesByCategory(categoryId: number): void {
    this.expencesService.getExpencesByCategory(categoryId).subscribe(
      expences => {
        this.expences = expences;
      })
  }

  changeDayCheckbox():void {
    this.dayCheckbox = !this.dayCheckbox;
  }

  onCategoriesChange(id: number): void {
    this.currentCategoryId = id;
    if (id != -1){
      this.loadExpencesByCategory(id);
    } else {
      this.loadExpences();
    }
  }

}
