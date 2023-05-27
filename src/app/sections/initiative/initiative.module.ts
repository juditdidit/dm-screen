import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconsModule } from 'src/app/icons/icons.module';
import { AddCreatureComponent } from './add-creature/add-creature.component';
import { CreatureListComponent } from './creature-list/creature-list.component';
import { CreatureComponent } from './creature-list/creature/creature.component';
import { InitiativeComponent } from './initiative.component';



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
