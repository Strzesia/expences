import { Component, OnInit } from '@angular/core';
import { transition, animate, state, trigger, style } from '@angular/animations';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less'],
  animations: [
    trigger('collapse', [
      state('show', style({
        opacity: '1',
        display: 'block',
        transform: 'translate3d(0, 0, 0)'
      })),
      state('hide', style({
        opacity: '0',
        display: 'none',
        transform: 'translate3d(0, -100%, 0)'
      })),
      transition('hide => show', animate('200ms ease-in')),
      transition('show => hide', animate('100ms ease-out'))
    ])
  ]
})
export class MenuComponent implements OnInit {

  collapse: string = "hide";

  toggleCollapse() {
    // this.show = !this.show
    this.collapse = this.collapse == "show" ? 'hide' : 'show';
  }

  constructor() { }

  ngOnInit() {
  }

}
