import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';

const materials = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatStepperModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule, materials],
  exports: [materials]
})
export class MaterialModule {}
