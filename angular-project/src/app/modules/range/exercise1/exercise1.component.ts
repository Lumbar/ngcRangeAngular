import { Component, OnInit } from '@angular/core';
import { FilterRange } from '../../../models/filter-range.model';
import { RangeValuesService } from '../../../services';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css']
})
export class Exercise1Component implements OnInit {

  min: number;
  max: number;
  rangeValues: FilterRange;
  
  constructor(private rangeValuesService: RangeValuesService) { 
    this.rangeValues = new FilterRange();
    this.min = 0;
    this.max = 100;
  }

  ngOnInit(): void {
    this.rangeValues.From = 2;
    this.rangeValues.To = 50;

    this.rangeValuesService.GetRangeValues().subscribe(response => {
      this.min = response.min;
      this.max = response.max;
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
