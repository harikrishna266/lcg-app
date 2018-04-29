import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CMSPipe } from './cmsdata.pipe'; 
import { PagingPipe } from './paging.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [CMSPipe,PagingPipe],
  exports:[CMSPipe,PagingPipe]
})
export class PipesModule { }
