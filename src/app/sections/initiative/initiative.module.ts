import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitiativeComponent } from './initiative.component';
import { AddCreatureComponent } from './add-creature/add-creature.component';
import { CreatureListComponent } from './creature-list/creature-list.component';
import { FormsModule } from '@angular/forms';
import { CreatureComponent } from './creature-list/creature/creature.component';
import { IconsModule } from 'src/app/icons/icons.module';



@NgModule({
  declarations: [
    InitiativeComponent,
    AddCreatureComponent,
    CreatureListComponent,
    CreatureComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IconsModule
  ],
  exports: [
    InitiativeComponent
  ]
})
export class InitiativeModule { }
