import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../../models/category';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Expence } from '../../models/expence';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.less']
})
export class AddFormComponent implements OnInit {

  @Input() categories: Category[];
  @Input() currentDate: number;
  @Output() addedExpense : EventEmitter<Expence> = new EventEmitter<Expence>();
  expenceForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.expenceForm = this.buildExpenceForm();
  }

  buildExpenceForm() {
    return this.formBuilder.group({
      categoryId: ["", Validators.required],
      cost: ["", Validators.required]
    })
  }

  emitExpence(expence: Expence): void {
    this.addedExpense.emit(expence);
    this.expenceForm.reset();
  }

  createExpence(data : any):void {
    let newExpence: Expence = {
      date:this.currentDate,
      cost:data.cost,
      category: {
        id: data.categoryId,
      }
    } as Expence;
    this.emitExpence(newExpence);
  }

}