import { Component, OnInit, NgZone } from '@angular/core';
import { Category } from '../../models/category';
import { CategoriesService } from '../../services/categories.service';
import { ExpencesService } from '../../services/expences.service';
import { Expence } from '../../models/expence';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ArraySorter } from '../../shared/sort';

@Component({
  selector: 'app-add-expences',
  templateUrl: './add-expences.component.html',
  styleUrls: ['./add-expences.component.less']
})
export class AddExpencesComponent implements OnInit {

  categories: Category[];
  expenceForm: FormGroup;
  currentDate: number;
  expence: Expence;
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
    data.category = this.setCategory(data.category);
    this.expences.push(data);
    this.expencesSum += data.cost;
  }

  onDeletedExpence(expence: Expence): void {
    this.expences = this.expences.filter(item => item !== expence);
  }

  onEditedExpense(expence: Expence): void {
    this.expences = this.expences.filter(item => item !== expence);
  }

  saveExpences(): void {
    this.expences.forEach(expence => 
      {
      this.expencesService.addExpence(expence).subscribe(
        (expence) => {
        console.log(`${expence.category}, ${expence.cost} is added`);
        this.expences = [];
      })});
  }

  setDate(date: number): void {
    this.currentDate = date;
  }

  setCategory(category: Category): Category {
    this.categoriesService.getCategory(category.id).subscribe(
      cat => category.name = cat.name
    );
    return category;
  }
}
