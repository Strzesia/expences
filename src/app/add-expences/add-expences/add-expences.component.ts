import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { CategoriesService } from '../../services/categories.service';
import { ExpencesService } from '../../services/expences.service';
import { Expence } from '../../models/expence';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Sort } from '../../shared/sort';

@Component({
  selector: 'app-add-expences',
  templateUrl: './add-expences.component.html',
  styleUrls: ['./add-expences.component.less']
})
export class AddExpencesComponent implements OnInit {

  categories: Category[];
  expenceForm: FormGroup;
  currentDate: number;
  sort: Sort = Sort.unsorted;
  expence :Expence;

  constructor(
    private categoriesService: CategoriesService,
    private expencesService: ExpencesService,
  ) { }

  ngOnInit() {
    this.loadCategories();
    }

  loadCategories(): void {
    this.categoriesService.getCategories().subscribe(data => {
      this.categories = data;
      this.sortByName(this.categories);
    })
  }
  
  onCreateExpence(data : Expence): void {
    this.expence = data;
  }

  addExpences(): void {
    this.expencesService.addExpence(this.expence).subscribe();
  }

  getDate(date: number): void {
    this.currentDate = date;
  }

  sortByName(categories: Category[]): Category[] {
    if (this.sort == Sort.byName){
      return categories.reverse();
    }
    this.sort = Sort.byName;
    return categories.sort((a,b) => a.name.localeCompare(b.name) );
  }

}
