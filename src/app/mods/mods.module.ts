import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModsRoutingModule } from './mods-routing.module';
import { ModulesHomeComponent } from './modules-home/modules-home.component';
import { ModalComponent } from './modal/modal.component';
import {SharedModule} from "../shared/shared.module";
import { AccordionComponent } from './accordion/accordion.component';


@NgModule({
  declarations: [
    ModulesHomeComponent,
    ModalComponent,
    AccordionComponent
  ],
  exports: [
    ModulesHomeComponent
  ],
  imports: [
    CommonModule,
    ModsRoutingModule,
    SharedModule
  ]
})
export class ModsModule { }
