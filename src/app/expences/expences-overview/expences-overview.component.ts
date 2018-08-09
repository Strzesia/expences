import { Component, OnInit } from '@angular/core';
import { ExpencesService } from '../../services/expences.service';
import { Expence } from '../../models/expence';

@Component({
  selector: 'app-expences-overview',
  templateUrl: './expences-overview.component.html',
  styleUrls: ['./expences-overview.component.less']
})
export class ExpencesOverviewComponent implements OnInit {

  expences: Expence[];
  constructor(private expencesService: ExpencesService) { }

  ngOnInit() {
    this.loadExpences();
  }

  deleteExpence(expence: Expence):void {
    this.expencesService.deleteExpence(expence.id).subscribe(() => {
      this.loadExpences();
    })
  }


  loadExpences() : void {
    this.expencesService.getExpences().subscribe((expences) => {
      this.expences = expences;
    })
  }

}
