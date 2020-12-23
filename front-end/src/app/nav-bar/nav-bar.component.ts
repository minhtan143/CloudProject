import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Menu } from '../commons/consts/menu.const';
import { LsHelper } from '../helpers/LsHepler';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  
  @Input() activeMenu = Menu.Integer;
  @Output() public callback: EventEmitter<string> = new EventEmitter<string>();
  Menu = Menu;
  constructor() { }

  ngOnInit(): void {

  }

  changeMenu(menu: string){
    LsHelper.setMenu(menu);
    this.callback.emit(menu);
  }

}
