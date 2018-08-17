import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Expence } from '../../models/expence';
import { Sort, ArraySorter } from '../../shared/sort';
import { Category } from '../../models/category';

@Component({
  selector: 'app-expences-table',
  templateUrl: './expences-table.component.html',
  styleUrls: ['./expences-table.component.less']
})
export class ExpencesTableComponent implements OnInit {

  expences: Expence[];
  expence: Expence;
  arraySorter: ArraySorter = new ArraySorter();
  @Input() expencesSum?: number = 0;
  @Input() categories: Category[];
  @Output() deletedExpence: EventEmitter<Expence> = new EventEmitter<Expence>();
  @Output() editedExpense: EventEmitter<Expence> = new EventEmitter<Expence>();

  constructor() { }

  ngOnInit() { }

  @Input()
  set expencesArr(expences : Expence[]){
    this.expences = expences;  
    this.expencesSum = 0;
    this.expences.forEach(expence => {
      this.expencesSum += expence.cost;
    });
  }  


  onEditExpence(expence: Expence): void {
    this.editedExpense.emit(expence);
  }

  sortByDate(): void {
    this.arraySorter.sortExpenceByDate(this.expences);
  }

  sortByCategory(): void {
    this.arraySorter.sortExpenceByCategory(this.expences);
  }

  sortByCost(): void {
    this.arraySorter.sortExpenceByCost(this.expences);
  }

}
