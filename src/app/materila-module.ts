import {NgModule} from '@angular/core';
import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  exports: [
    A11yModule,
    ClipboardModule,
    CdkStepperModule,   
    MatProgressBarModule,   
  ]
})
export class MaterialModule {}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */