import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngc-range',
  templateUrl: './custom-range.component.html',
  styleUrls: ['./custom-range.component.css']
})
export class CustomRangeComponent implements OnInit {

  @Input() min = 0;
  @Input() max = 1;
  @Input() ngModel: string;
  @Output() rangeChange = new EventEmitter();

  displayedColumns: string[] = ['from', 'range', 'to'];

  constructor() { }

  ngOnInit(): void {
  }
}