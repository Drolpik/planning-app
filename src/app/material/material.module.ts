import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

const materials = [MatSidenavModule, MatToolbarModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, materials],
  exports: [materials]
})
export class MaterialModule {}
