import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { CategoriesService } from '../../services/categories.service';
import { ExpencesService } from '../../services/expences.service';
import { Expence } from '../../models/expence';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-expences',
  templateUrl: './add-expences.component.html',
  styleUrls: ['./add-expences.component.less']
})
export class AddExpencesComponent implements OnInit {

  categories: Category[];
  expenceForm: FormGroup;
  currentDate: number;
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
    })
  }
  
  onCreateExpence(data : Expence): void {
    this.expence = data;
  }

  addExpence(): void {
    this.expencesService.addExpence(this.expence).subscribe();
  }

  getDate(date: number): void {
    this.currentDate = date;
  }

}
