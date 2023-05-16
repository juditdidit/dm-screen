import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonstersComponent } from './monsters.component';
import { MonsterListComponent } from './monster-list/monster-list.component';
import { AddMonsterComponent } from './add-monster/add-monster.component';
import { MonsterComponent } from './monster-list/monster/monster.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MonstersComponent,
    MonsterListComponent,
    AddMonsterComponent,
    MonsterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MonstersComponent
  ]
})
export class MonstersModule { }
