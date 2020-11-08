import { Component, OnInit, Input, Output, EventEmitter, DoCheck, ChangeDetectorRef } from '@angular/core';
import { FilterRange } from '../../../models/filter-range.model';

export class StepsRange {
  value: number;
  legend: string;
}

@Component({
  selector: 'ngc-range',
  templateUrl: './custom-range.component.html',
  styleUrls: ['./custom-range.component.css']
})
export class CustomRangeComponent implements OnInit {

  @Input() min: number = 1;
  @Input() max: number = 100;
  @Input() values: number[];
  @Input() type: string;
  @Input() ngmodel: FilterRange;
  @Output() rangeChange = new EventEmitter<FilterRange>();

  slidersRefresh: EventEmitter<void> = new EventEmitter<void>();

  fromObservable: number;
  toObservable: number;
  minObservable: number;
  maxObservable: number;

  inputProvided: boolean;
  hidePointerLabels: boolean;
  showTicksValues: boolean;
  stepsArray: StepsRange[];
  disabled: boolean;

  constructor(private cd: ChangeDetectorRef) { 
    this.stepsArray = [];
  }

  ngOnInit(): void {
    if (this.ngmodel.From === undefined || this.ngmodel.To === undefined){
      this.ngmodel.From = this.min;
      this.ngmodel.To = this.max;
      this.inputProvided = false;
    }
    else{
      this.inputProvided = true;
    }

    if (this.type === "fixed"){
      this.hidePointerLabels = false;
      this.showTicksValues = true;
      this.disabled = true;

      if (this.values !== undefined && Object.keys(this.values).length > 0){
        this.min = this.values[0];
        this.max = this.values[Object.keys(this.values).length - 1];

        this.ngmodel.From = this.min;
        this.ngmodel.To = this.max;

        for (let i = 0; i < Object.keys(this.values).length; i++) {
          let step: StepsRange = new StepsRange();
          step.value = this.values[i];
          this.stepsArray.push(step);
        }
      }
    }
    else{
      this.hidePointerLabels = true;
      this.showTicksValues = false;
      this.disabled = false;
    }
  }

  ngDoCheck() {
    // check for object mutation
    
    if (this.fromObservable !== this.ngmodel.From || 
        this.toObservable !== this.ngmodel.To || 
        ((this.values !== undefined && Object.keys(this.values).length > 0) &&  
          (this.minObservable !== this.values[0] || 
          this.maxObservable !== this.values[Object.keys(this.values).length - 1]
          )
        ) 
      ) {
      if (this.fromObservable !== this.ngmodel.From){
        this.fromObservable = this.ngmodel.From;
      }
      if (this.toObservable !== this.ngmodel.To){
        this.toObservable = this.ngmodel.To;
      }

      if ((this.values !== undefined && Object.keys(this.values).length > 0) && 
      (this.minObservable !== this.values[0] || this.maxObservable !== this.values[Object.keys(this.values).length - 1])){
        if (this.minObservable !== this.values[0]){
          this.minObservable = this.values[0];
          this.min = this.minObservable;
        }
        
        if (this.maxObservable !== this.values[Object.keys(this.values).length - 1]){
          this.maxObservable = this.values[Object.keys(this.values).length - 1];
          this.max = this.maxObservable;
        }
       
        this.stepsArray = [];
        for (let i = 0; i < Object.keys(this.values).length; i++) {
          let step: StepsRange = new StepsRange();
          step.value = this.values[i];
          this.stepsArray.push(step);
        }
      }

      this.cd.markForCheck();

      if (this.inputProvided === false){
        this.onRangeChange();
      }
    }
  }

  onRangeChange(){
    this.rangeChange.emit(this.ngmodel);
  }
}