import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Pipe({
    name: 'customCurrency',
  })
  export class CustomCurrencyPipe implements PipeTransform {
    constructor(private currencyPipe: CurrencyPipe) { }

    transform(value: any, currencyCode?: string, display?: string | boolean, digitsInfo?: string, locale?: string): string {
      debugger;
        if (value != null && !isNaN(parseFloat(value)))
            return this.currencyPipe.transform(parseFloat(value), currencyCode, display, digitsInfo, locale);
            
        return this.currencyPipe.transform(1, currencyCode, display, locale).split('0.00')[0];
    }
}