import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paging',
  
})
export class PagingPipe implements PipeTransform {

  transform(value: any, pagenumber?: any, pagesize?: any): any {
    if(!pagenumber) { pagenumber = 0; pagesize =1}
    return value.slice(pagenumber,pagenumber+1)    
  }

}