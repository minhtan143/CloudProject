import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../../services/application.service';

@Component({
  selector: 'app-random-decimal',
  templateUrl: './random-decimal.component.html',
  styleUrls: ['./random-decimal.component.scss']
})
export class RandomDecimalComponent implements OnInit {
  result: number;

  constructor(
    private applicationService: ApplicationService
  ) { }

  ngOnInit(): void {
  }

  generate(): void{
    this.applicationService.randomDecimal().subscribe(
      (res) => {
        this.result = res;
      }
    )
  }

}
