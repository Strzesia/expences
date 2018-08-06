import { Component, OnInit } from '@angular/core';
import { Expence } from '../../models/expence';
import { ExpencesService } from '../../services/expences.service';

@Component({
  selector: 'app-expences-table',
  templateUrl: './expences-table.component.html',
  styleUrls: ['./expences-table.component.less']
})
export class ExpencesTableComponent implements OnInit {

  expences : Expence[];
  expence : Expence;

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

}
