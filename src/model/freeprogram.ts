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


export class TestModel{
    constructor(
        public id:number,
        public program_id:string,
        public title:string,
        public duration:number,
        public guidelines:string,
    ){
        
    }
}

export class QuestionModel {
    constructor(
        public 	id:number,
        public 	test_id:number,
        public 	question:string,
        public answer_1:string,
        public answer_2:string,
        public answer_3:string,
        public answer_4:string,
        public answer_5:string,
        public correct_answer:string,
        public selected:number,
    ){
        
    }
}
export class FeedBackModel{
    constructor(
        public test_id:number,
        public question_key:string,
        public question:string,
        public rating:number,
    ){
        
    }
}
export class SessionFeedBackModel{
    constructor(
        public session_id:number,
        public question_key:string,
        public question:string,
        public rating:number,
    ){
        
    }
}