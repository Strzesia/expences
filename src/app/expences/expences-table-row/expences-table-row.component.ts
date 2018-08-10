import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Expence } from '../../models/expence';
import { Category } from '../../models/category';

@Component({
  selector: 'app-expences-table-row',
  templateUrl: './expences-table-row.component.html',
  styleUrls: ['./expences-table-row.component.less']
})
export class ExpencesTableRowComponent implements OnInit {
  
  @Input() expence: Expence;
  @Input() categories: Category[];
  editFormClosed: boolean = true;
  @Output() editedExpense: EventEmitter<Expence> = new EventEmitter<Expence>();
  @Output() deletedExpence: EventEmitter<Expence> = new EventEmitter<Expence>();
  
  constructor() { }

  ngOnInit() {
  }

  onEditExpence(expence: Expence): void {
    this.editedExpense.emit(expence);
  }

  onDeleteClick(expence: Expence) {
    this.deletedExpence.emit(expence);
  }

}
