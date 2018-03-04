import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CMSPipe } from './cmsdata.pipe'; 


@NgModule({
  imports: [CommonModule],
  declarations: [CMSPipe],
  exports:[CMSPipe]
})
export class PipesModule { }
