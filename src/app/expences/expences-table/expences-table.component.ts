import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Expence } from '../../models/expence';
import { Sort } from '../../shared/sort';

@Component({
  selector: 'app-expences-table',
  templateUrl: './expences-table.component.html',
  styleUrls: ['./expences-table.component.less']
})
export class ExpencesTableComponent implements OnInit {

  private expences: Expence[];
  expence : Expence;
  sort : Sort = Sort.unsorted;
  @Input() expencesSum?: number = 0;
  @Output() deletedExpence: EventEmitter<Expence> = new EventEmitter<Expence>();

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


  onDeleteClick(expence: Expence) {
    this.deletedExpence.emit(expence);
  }

  sortByDate(expences: Expence[]):Expence[] {
    if (this.sort == Sort.byDate){
      return expences.reverse();
    }
    this.sort = Sort.byDate;
    return expences.sort((a,b) => a.date - b.date );    
  }

  sortByCategory(expences: Expence[]):Expence[] {
    if (this.sort == Sort.byCategory){
      return expences.reverse();
    }
    this.sort = Sort.byCategory;
    return expences.sort((a,b) => a.category.name.localeCompare(b.category.name));    
  }

  sortByCost(expences: Expence[]):Expence[] {
    if (this.sort == Sort.byCost){
      return expences.reverse();
    }
    this.sort = Sort.byCost;
    return expences.sort((a,b) => a.cost - b.cost );    
  }
}
