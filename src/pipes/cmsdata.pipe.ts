import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cmsdata',
  
})
export class CMSPipe implements PipeTransform {

  transform(value: any, data?: any): any {
     
     for(let key of data) {
       if(key.block == value) return key.content;
     }
  }

} 