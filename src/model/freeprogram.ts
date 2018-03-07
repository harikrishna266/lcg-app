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
         public pre_course_material_3:string,
         public pre_course_material_4:string,
         public pre_course_material_5:string,
         public pre_course_material_6:string,
         public pre_course_material_7:string,
         public pre_course_material_8:string,
         public pre_course_material_9:string,
         public pre_course_material_name_1:string,
         public pre_course_material_name_2:string,
         public pre_course_material_name_3:string,
         public pre_course_material_name_4:string,
         public pre_course_material_name_5:string,
         public pre_course_material_name_6:string,
         public pre_course_material_name_7:string,
         public pre_course_material_name_8:string,
         public pre_course_material_name_9:string,
         public program_payment_instructions:string
    ){
        this.banner = environment.baseURL+"images/"+banner;
        this.widebanner = environment.baseURL+"images/"+widebanner;
        this.pre_course_material_1 = environment.baseURL+"images/"+pre_course_material_1;
        this.pre_course_material_2 = environment.baseURL+"images/"+pre_course_material_2;
        this.pre_course_material_3 = environment.baseURL+"images/"+pre_course_material_3;
        this.pre_course_material_4 = environment.baseURL+"images/"+pre_course_material_4;
        this.pre_course_material_5 = environment.baseURL+"images/"+pre_course_material_5;
        this.pre_course_material_6 = environment.baseURL+"images/"+pre_course_material_6;
        this.pre_course_material_7 = environment.baseURL+"images/"+pre_course_material_7;
        this.pre_course_material_8 = environment.baseURL+"images/"+pre_course_material_8;
        
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