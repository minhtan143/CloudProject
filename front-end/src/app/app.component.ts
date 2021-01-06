import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../services/application.service';
import { Menu } from './commons/consts/menu.const';
import { LsHelper } from './helpers/LsHepler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'kubedemo-app';
  version: string;
  Menu = Menu;
  activeMenu = LsHelper.getMenu();
  constructor(private applicationService: ApplicationService) {

  }
  ngOnInit(): void {
    this.applicationService.getVersion().subscribe((res) => this.version = res);
  }


}
