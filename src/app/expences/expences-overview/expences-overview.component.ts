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
  currentCategoryId: number = -1;
  currentDay: String;
  currentDateFrom: String;
  currentDateTo: String;
  daysRadio: String = "all";

  constructor(
    private expencesService: ExpencesService,
    private categoriesServeice: CategoriesService
  ) { }

  ngOnInit() {
    this.loadCategories();
    this.loadDates();
  }
  
  loadCategories(): void {
    this.categoriesServeice.getCategories().subscribe((categories) => {
      this.arraySorter.sortCategoriesByName(categories);
      this.categories = categories;
    });
  } 

  loadDates(): void {
    let today = new Date();
    this.setDay(today.toISOString().slice(0,10));
    let firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 2)
    this.setDateFrom(firstDayOfMonth.toISOString().slice(0,10));
    let lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
    this.setDateTo(lastDayOfMonth.toISOString().slice(0,10));
  }

  setCategoryId(id: number): void {
    this.currentCategoryId = id;
    this.loadExpences();
  }

  setDaysRadio(days: String):void {
    this.daysRadio = days;
    this.loadExpences();
  }

  setDay(day: String): void {
    this.currentDay = day;
    this.loadExpences();
  }

  setDateFrom(dateFrom:String): void{
    this.currentDateFrom = dateFrom;
    if (this.currentDateTo) {
      this.loadExpences()
    }
  }

  setDateTo(dateTo:String): void{
    this.currentDateTo = dateTo;
    if (this.currentDateFrom) {
      this.loadExpences()
    }
  }

  onDeleteExpense(expense: Expence): void {
    this.expencesService.deleteExpence(expense.id).subscribe(
     () => this.loadExpences()
    );
  }

  loadExpences():void {
    if (this.currentCategoryId == -1) {
      this.loadExpencesWhenNoCategory();
    } else {
      this.loadExpencesWhenCategory();
    }
  }

  loadExpencesWhenCategory(): void {
    if (this.daysRadio == "all") {
      this.loadExpencesWhenCategoryAndAllDays();
    } else {
      this.loadExpencesWhenCategoryAndDays();
    }
  }

  loadExpencesWhenCategoryAndAllDays(): void {
    this.expencesService.getExpencesByCategory(this.currentCategoryId).subscribe(
      expences => this.expences = this.sortByDate(expences)
    )
  }

  loadExpencesWhenCategoryAndDays(): void {
    if (this.daysRadio == "one"){
      this.loadExpencesWhenCategoryAndOneDay();
    } else {
      this.loadExpencesWhenCategoryAndManyDays();
    }
  }

  loadExpencesWhenCategoryAndOneDay(): void {
    this.expencesService.getExpencesByDayAndCategory(this.currentDay, this.currentCategoryId).subscribe(
      expences => this.expences = this.sortByDate(expences)
    )
  }

  loadExpencesWhenCategoryAndManyDays(): void {
    this.expencesService.getExpencesByDaysAndCategory(this.currentDateFrom, this.currentDateTo , this.currentCategoryId).subscribe(
      expences => this.expences = this.sortByDate(expences)
    )
  }

  loadExpencesWhenNoCategory(): void {
    if (this.daysRadio == "all") {
      this.loadExpencesWhenNoCategoryAndAllDays();
    } else {
      this.loadExpencesWhenNoCategoryAndDays();
    }
  }

  loadExpencesWhenNoCategoryAndAllDays(): void {
    this.expencesService.getExpences().subscribe(
      expences => this.expences = this.sortByDate(expences)
    )
  }

  loadExpencesWhenNoCategoryAndDays(): void {
    if (this.daysRadio == "one"){
      this.loadExpencesWhenNoCategoryAndOneDay();
    } else {
      this.loadExpencesWhenNoCategoryAndManyDays();
    }
  }

  loadExpencesWhenNoCategoryAndOneDay(): void {
    this.expencesService.getExpencesByDay(this.currentDay).subscribe(
      expences => this.expences = this.sortByDate(expences)
    )
  }

  loadExpencesWhenNoCategoryAndManyDays(): void {
    this.expencesService.getExpencesByDays(this.currentDateFrom, this.currentDateTo).subscribe(
      expences => this.expences = this.sortByDate(expences)
    )
  }

  sortByDate(expences: Expence[]): Expence[] {
    return this.arraySorter.sortExpenceByDate(expences);
  }

}
