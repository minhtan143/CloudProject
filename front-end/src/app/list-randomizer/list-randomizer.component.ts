import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../../services/application.service';

@Component({
  selector: 'app-list-randomizer',
  templateUrl: './list-randomizer.component.html',
  styleUrls: ['./list-randomizer.component.scss']
})
export class ListRandomizerComponent implements OnInit {

  result: string[] = [];
  input = '';
  constructor(
    private applicationService: ApplicationService
  ) { }

  ngOnInit(): void {
  }

  generate(): void {
    this.applicationService.listRandomizer(this.input).subscribe((res) => {
      this.result = res;
    })
  }

}
