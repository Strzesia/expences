import { Component, OnInit, NgZone } from '@angular/core';
import { Category } from '../../models/category';
import { CategoriesService } from '../../services/categories.service';
import { ExpencesService } from '../../services/expences.service';
import { Expence } from '../../models/expence';
import { ArraySorter } from '../../shared/sort';

@Component({
  selector: 'app-add-expences',
  templateUrl: './add-expences.component.html',
  styleUrls: ['./add-expences.component.less']
})
export class AddExpencesComponent implements OnInit {

  categories: Category[];
  currentDate: number;
  expences: Expence[] = [];
  expencesSum: number = 0;
  arraySorter: ArraySorter = new ArraySorter();

  constructor(
    private categoriesService: CategoriesService,
    private expencesService: ExpencesService,
  ) { }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoriesService.getCategories().subscribe(
      categories => {
        this.arraySorter.sortCategoriesByName(categories);
        this.categories = categories
    });
  }
  
  onCreateExpence(data : Expence): void {
    data.date = new Date(data.date);
    data.category = this.getCategoryName(data.category);
    data.id = this.expences.length;
    this.expences.push(data);
    this.updateSum();
  }

  onDeletedExpence(expence: Expence): void {
    this.expences = this.expences.filter(item => item !== expence);
    this.updateSum();
  }

  onEditedExpense(expense: Expence): void {
    this.expences[expense.id] = expense;
    expense.category = this.getCategoryName(expense.category);
    this.updateSum();
  }

  saveExpences(): void {
    this.expences.forEach(
      expence => {
        this.expencesService.addExpence(expence).subscribe(
          () => this.expences = []);
      });
  }

  setDate(date: number): void {
    this.currentDate = date;
  }

  getCategoryName(category: Category): Category {
    this.categoriesService.getCategory(category.id).subscribe(
      cat => category.name = cat.name
    );
    return category;
  }

  updateSum(): void {
    this.expencesSum = 0;
    this.expences.forEach(
      expence =>{
        this.expencesSum += expence.cost
      }); 
  }
}
