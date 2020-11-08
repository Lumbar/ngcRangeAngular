import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RangeValuesAgent } from '../../agents';
import { GetRangeValuesResponse, GetFixedValuesResponse } from '../../agents/range-values/response';

@Injectable()
export class RangeValuesService {

  constructor(private rangeValuesAgent: RangeValuesAgent) {
  }

  GetRangeValues(): Observable<GetRangeValuesResponse> {

    return this.rangeValuesAgent.GetRangeValues().pipe(map(response => response));
  }

  GetFixedValues(): Observable<GetFixedValuesResponse> {

    return this.rangeValuesAgent.GetFixedValues().pipe(map(response => response));
  }
}
