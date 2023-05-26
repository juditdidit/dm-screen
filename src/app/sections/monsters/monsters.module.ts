import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconsModule } from 'src/app/icons/icons.module';
import { AddMonsterComponent } from './add-monster/add-monster.component';
import { MonsterListComponent } from './monster-list/monster-list.component';
import { MonsterComponent } from './monster-list/monster/monster.component';
import { MonstersComponent } from './monsters.component';



@NgModule({
  declarations: [
    MonstersComponent,
    MonsterListComponent,
    AddMonsterComponent,
    MonsterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IconsModule,
  ],
  exports: [
    MonstersComponent
  ]
})
export class MonstersModule { }
