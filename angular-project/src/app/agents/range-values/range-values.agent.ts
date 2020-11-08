import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NetworkManager, PostParameters } from '../common/networkmanager';
import { GetRangeValuesResponse, GetFixedValuesResponse } from './response';

@Injectable()
export class RangeValuesAgent {
  private readonly url: string;

  constructor(
    private networkManager: NetworkManager) {
    this.url = "https://demo7252413.mockable.io/";
  }

  GetRangeValues(): Observable<GetRangeValuesResponse> {
    const parameters: PostParameters = new PostParameters();
    parameters.PathOperation = this.url + "rangeValues";
    parameters.RequestParameter = null;

    return this.networkManager.post(parameters) as Observable<GetRangeValuesResponse>;
  }

  GetFixedValues(): Observable<GetFixedValuesResponse> {
    const parameters: PostParameters = new PostParameters();
    parameters.PathOperation = this.url + "fixedValues";
    parameters.RequestParameter = null;

    return this.networkManager.post(parameters) as Observable<GetFixedValuesResponse>;
  }
}
