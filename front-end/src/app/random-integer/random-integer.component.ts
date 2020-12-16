import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-integer',
  templateUrl: './random-integer.component.html',
  styleUrls: ['./random-integer.component.scss']
})
export class RandomIntegerComponent implements OnInit {

  min: number;
  max: number;
  result: number;
  constructor() { }

  ngOnInit(): void {
  }

  generate(){
    console.log(this.min, this.max);
    this.result = Number(this.min) + Number(this.max);
  }

}
