import { environment } from '../environments/environment';
export class FreeProgram{
    constructor(
         public id:number,
         public name:string,
         public venue:string,
         public date:string,
         public banner:string,
         public widebanner:string,
         public description:string,
         public program_payment_instructions:string
    ){
        this.banner = environment.baseURL+"images/"+banner;
        this.widebanner = environment.baseURL+"images/"+widebanner;
    }
}