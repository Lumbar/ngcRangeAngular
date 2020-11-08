import { Component, OnInit } from '@angular/core';
import { FilterRange } from '../../../models/filter-range.model';
import { RangeValuesService } from '../../../services';

@Component({
  selector: 'app-exercise2',
  templateUrl: './exercise2.component.html',
  styleUrls: ['./exercise2.component.css']
})
export class Exercise2Component implements OnInit {
  values: number[];
  rangeValues: FilterRange;
  
  constructor(private rangeValuesService: RangeValuesService) { 
    this.rangeValues = new FilterRange();
    this.values = [];
  }

  ngOnInit(): void {
    this.rangeValues.From = 2;
    this.rangeValues.To = 50;

    this.rangeValuesService.GetFixedValues().subscribe(response => {
      this.rangeValues.From = response.numbers[0];
      this.rangeValues.To = response.numbers[response.numbers.length - 1];

      this.values = Object.assign({}, response.numbers);
      
    },
      () => {

      },
      () => {

      }
    );
  }

  rangeChange(event){
    
  }

}
