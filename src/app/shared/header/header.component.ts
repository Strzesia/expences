import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  date : number;

  showDate() {
    this.date = Date.now();
  }

  ngOnInit() {
    this.showDate();
  }

}
