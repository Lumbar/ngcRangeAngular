import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exercise1Component } from './modules/range/exercise1/exercise1.component';
import { Exercise2Component } from './modules/range/exercise2/exercise2.component';
import { CustomRangeComponent } from './modules/range/custom-range/custom-range.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { Ng5SliderModule } from 'ng5-slider';
import { CustomCurrencyPipe } from './pipes/currency.pipe';
import { CurrencyPipe } from '@angular/common';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NetworkManager } from './agents/common/networkmanager';
import { RangeValuesAgent } from './agents';
import { RangeValuesService } from './services';

import {A11yModule} from '@angular/cdk/a11y';
import {BidiModule} from '@angular/cdk/bidi';
import {ObserversModule} from '@angular/cdk/observers';
import {OverlayModule} from '@angular/cdk/overlay';
import {PlatformModule} from '@angular/cdk/platform';
import {PortalModule} from '@angular/cdk/portal';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';

import {
  MatInputModule,
} from '@angular/material/input';

import {
  MatSliderModule,
} from '@angular/material/slider';

import {
  MatFormFieldModule,
} from '@angular/material/form-field';

import {
  MatTableModule,
} from '@angular/material/table';

import {
  FormsModule,
} from '@angular/forms';

import localeFr from '@angular/common/locales/fr';
import { MatSnackBarModule } from '@angular/material/snack-bar';
registerLocaleData(localeFr);

@NgModule({
  exports: [
    // CDK
    A11yModule,
    BidiModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    
    // Material
    MatInputModule,
    MatSliderModule,
    MatFormFieldModule,
    MatTableModule,
    MatSnackBarModule,
  ]
})
export class MaterialModule {}

@NgModule({
  declarations: [
    AppComponent,
    
    Exercise1Component,
    Exercise2Component,
    CustomRangeComponent,
    CustomCurrencyPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    Ng5SliderModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'},
    NetworkManager,
    RangeValuesAgent,
    RangeValuesService,
    CurrencyPipe,
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    CustomRangeComponent,
    
  ]
})
export class AppModule { }
