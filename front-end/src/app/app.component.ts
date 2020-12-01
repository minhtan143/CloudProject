import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../services/application.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'kubedemo-app';
  version: string;
  constructor(private applicationService: ApplicationService) {

  }
  ngOnInit(): void {
    this.applicationService.getVersion().subscribe((res) => this.version = res);
  }
}
