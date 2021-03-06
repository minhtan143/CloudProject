import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../../services/application.service';

@Component({
  selector: 'app-random-integer',
  templateUrl: './random-integer.component.html',
  styleUrls: ['./random-integer.component.scss']
})
export class RandomIntegerComponent implements OnInit {

  min: number;
  max: number;
  result: number;
  constructor(
    private applicationService: ApplicationService
  ) { }

  ngOnInit(): void {
  }

  generate(){
    this.applicationService.randomInteger(this.min, this.max).subscribe(
      (res) => {
        this.result = res;
      }
    )
  }
}
