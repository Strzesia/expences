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

  constructor(
    private categoriesService: CategoriesService,
    private expencesService: ExpencesService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.loadCategories();
    this.expenceForm = this.buildExpenceForm();
  }

  buildExpenceForm() {
    return this.formBuilder.group({
      categoryId: ["", Validators.required],
      cost: ["", Validators.required]
    })
  }

  loadCategories(): void {
    this.categoriesService.getCategories().subscribe(data => {
      this.categories = data;
    })
  }

  addExpence(data : any): void {
    let newExpence = {
      date:this.currentDate,
      cost:data.cost,
      category: {
        id: data.categoryId,
      }
    };
    this.expencesService.addExpence(newExpence).subscribe();
  }

  getDate(date: number): void {
    this.currentDate = date;
  }
}
