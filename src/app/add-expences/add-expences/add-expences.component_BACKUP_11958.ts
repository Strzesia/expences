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
<<<<<<< HEAD
  sort: Sort = Sort.unsorted;
=======
  expence :Expence;
>>>>>>> 6993ea99a646d6137f5437ef2b4b99844aa603db

  constructor(
    private categoriesService: CategoriesService,
    private expencesService: ExpencesService,
  ) { }

  ngOnInit() {
<<<<<<< HEAD
    this.expenceForm = this.buildExpenceForm();
  }

  buildExpenceForm() {
    return this.formBuilder.group({
      categoryId: ["", Validators.required],
      cost: ["", Validators.required]
    })
  }
=======
    this.loadCategories();
    }
>>>>>>> 6993ea99a646d6137f5437ef2b4b99844aa603db

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

<<<<<<< HEAD
  sortByName(categories: Category[]): Category[] {
    if (this.sort == Sort.byName){
      return categories.reverse();
    }
    this.sort = Sort.byName;
    return categories.sort((a,b) => a.name.localeCompare(b.name) );
  }
=======
>>>>>>> 6993ea99a646d6137f5437ef2b4b99844aa603db
}
