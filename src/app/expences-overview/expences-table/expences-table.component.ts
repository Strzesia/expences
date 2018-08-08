import { Component, OnInit } from '@angular/core';
import { Expence } from '../../models/expence';
import { ExpencesService } from '../../services/expences.service';
import { Sort } from '../../shared/sort';

@Component({
  selector: 'app-expences-table',
  templateUrl: './expences-table.component.html',
  styleUrls: ['./expences-table.component.less']
})
export class ExpencesTableComponent implements OnInit {

  expences : Expence[];
  expence : Expence;
  sort : Sort = Sort.unsorted;

  constructor(
    private expencesService : ExpencesService
  ) { }

  ngOnInit() {
    this.loadExpences();
  }

  loadExpences() : void {
    this.expencesService.getExpences().subscribe((expences) => {
      this.expences = expences;
    })
  }

  onDeleteClick(expence: Expence) {
    this.expencesService.deleteExpence(expence.id).subscribe(() => {
      this.loadExpences();
    });
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
