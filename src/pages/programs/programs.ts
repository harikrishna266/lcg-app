import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ModalController } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';
import { ProgramDetailsPage } from '../program-details/program-details';
import { TestPageModule } from '../test/test.module';
import { ProgramProvider } from '../../providers/program';
import { FreeProgram } from '../../model/freeprogram';


 
@IonicPage()
@Component({
  selector: 'page-programs',
  templateUrl: 'programs.html',
})
export class ProgramsPage {

  public programs:FreeProgram[] = [];
  constructor(public programSer:ProgramProvider, public nav: NavController ) {

  }

  ngOnInit() {
    this.programSer.getBasicPrograms()
      .subscribe((res:any) => {
        for(let pro of res) {
            this.programs = [...this.programs,
              new FreeProgram(pro.id,pro.name,pro.venue,pro.date,
                              pro.banner,pro.widebanner,pro.description,pro.program_payment_instructions)
            ]
        }
      });
  }
  
  moreDetails(prog) {
    this.nav.push(ProgramDetailsPage,{data:prog});
  }

  
}
