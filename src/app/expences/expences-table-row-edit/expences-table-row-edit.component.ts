import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Expence } from '../../models/expence';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Category } from '../../models/category';
import { ExpencesService } from '../../services/expences.service';

@Component({
  selector: 'app-expences-table-row-edit',
  templateUrl: './expences-table-row-edit.component.html',
  styleUrls: ['./expences-table-row-edit.component.less']
})
export class ExpencesTableRowEditComponent implements OnInit {

  @Input() expence: Expence;
  @Input() categories: Category[];
  
  expenceEditForm: FormGroup;

  @Output() closedEditForm: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() editedExpence: EventEmitter<Expence> = new EventEmitter<Expence>();


  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.expenceEditForm = this.buildExpenceEditForm();
    console.log(`Categories: ${this.categories}`)
  }

  buildExpenceEditForm():FormGroup {
    return this.formBuilder.group({
      date: [this.expence.date, Validators.required],
      categoryId: [this.expence.category.id, Validators.required],
      cost: [this.expence.cost, Validators.required]
    })
  }

  closeEditForm(){
    this.closedEditForm.emit(true);
  }

  onEditClick(formValue: any): void{
    let expence = this.createExpence(formValue);
    this.emitExpense(expence);
  }

  emitExpense(expence: Expence): void {
    this.editedExpence.emit(expence);
  }

  createExpence(data: any): Expence {
    let newExpence: Expence = {
      id:this.expence.id,
      date:data.date,
      cost:data.cost,
      category: {
        id: data.categoryId,
      }
    } as Expence;
    return newExpence;
  }
}
