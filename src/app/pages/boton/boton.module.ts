import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BotonPageRoutingModule } from './boton-routing.module';

import { BotonPage } from './boton.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BotonPageRoutingModule
  ],
  declarations: [BotonPage]
})
export class BotonPageModule {}
