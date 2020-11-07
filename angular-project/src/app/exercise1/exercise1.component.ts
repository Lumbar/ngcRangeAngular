import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css']
})
export class Exercise1Component implements OnInit {

  model: string;
  constructor() { }

  ngOnInit(): void {
  }

  rangeChange(event){

  }
}
