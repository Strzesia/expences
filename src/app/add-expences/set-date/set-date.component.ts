import { Component, OnInit, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-set-date',
  templateUrl: './set-date.component.html',
  styleUrls: ['./set-date.component.less']
})
export class SetDateComponent implements OnInit {

  readonly day: number = 86400000;
  date: number;

  @Output() gotDate : EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.setDate(Date.now());
  }

  setDate(date:any): void {
    this.date = new Date(date).getTime();
    this.emitDate(this.date);
  }

  setPreviousDay(): void{
    let previousDate: number = this.date -= this.day;
    this.setDate(previousDate);
  }

  setNextDay(): void {
    let nextDate: number = this.date += this.day;
    this.setDate(nextDate);
  }

  emitDate(newDate: number): void {
    this.gotDate.emit(newDate);
  }

}
