import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../../services/application.service';

@Component({
  selector: 'app-string-generator',
  templateUrl: './string-generator.component.html',
  styleUrls: ['./string-generator.component.scss']
})
export class StringGeneratorComponent implements OnInit {
  result: string[] = [];
  stringCount: number;
  characterCount: number;
  digits = false;
  upperLetter = false;
  lowerLetter = false;
  allowDupplicate = false;
  constructor(
    private applicationService: ApplicationService
  ) { }

  ngOnInit(): void {

  }

  generate(): void {
    this.applicationService.stringGenerator(
      this.stringCount, this.characterCount, this.digits, this.upperLetter, this.lowerLetter, this.allowDupplicate
    ).subscribe((res) => this.result = res);
  }
}
