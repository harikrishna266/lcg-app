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
 
export class PaidProgramModel{
    constructor(
         public id:number,
         public name:string,
         public venue:string,
         public date:string,
         public banner:string,
         public widebanner:string,
         public description:string,
         public pre_course_material_1:string,
         public pre_course_material_2:string,
         public pre_course_material_name_1:string,
         public pre_course_material_name_2:string,
         public program_payment_instructions:string
    ){
        this.banner = environment.baseURL+"images/"+banner;
        this.widebanner = environment.baseURL+"images/"+widebanner;
        this.pre_course_material_1 = environment.baseURL+"images/"+pre_course_material_1;
        this.pre_course_material_2 = environment.baseURL+"images/"+pre_course_material_2;
    }
}

export class SessionModel {
    constructor(
        public id:number,
        public name:string,
        public venue:string,
        public date:string,
        public banner:string,
        public widebanner:string,
        public description:string,
        public tab1:string,
        public tab2:string,
        public tab3 :string,
        public 	tab1_content:string,
        public 	tab2_content:string,
        public 	tab3_content:string,
        
   ){
       this.banner = environment.baseURL+"images/"+banner;
       this.widebanner = environment.baseURL+"images/"+widebanner;
       
   }
}