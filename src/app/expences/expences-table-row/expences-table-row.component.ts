import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Expence } from '../../models/expence';
import { Category } from '../../models/category';
import { ExpencesService } from '../../services/expences.service';

@Component({
  selector: 'app-expences-table-row',
  templateUrl: './expences-table-row.component.html',
  styleUrls: ['./expences-table-row.component.less']
})
export class ExpencesTableRowComponent implements OnInit {
  
  @Input() expence: Expence;
  @Input() categories: Category[];

  editFormClosed: boolean = true;

  @Output() deletedExpence: EventEmitter<Expence> = new EventEmitter<Expence>();
  @Output() editedExpence: EventEmitter<Expence> = new EventEmitter<Expence>();

  constructor(
    private expencesService: ExpencesService
  ) { }

  ngOnInit() {
  }

  onCloseEditForm(closed: boolean) {
    this.editFormClosed = closed;
  }

  onDeleteClick(expence: Expence) {
    this.deletedExpence.emit(expence);
  }
  
  onEditedExpense(expence: Expence): void{
    this.editedExpence.emit(expence);
  }


}
