import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconEditComponent } from './icon-edit/icon-edit.component';
import { IconPotionComponent } from './icon-potion/icon-potion.component';
import { IconSkullComponent } from './icon-skull/icon-skull.component';
import { IconTrashComponent } from './icon-trash/icon-trash.component';



@NgModule({
  declarations: [
    IconEditComponent,
    IconPotionComponent,
    IconSkullComponent,
    IconTrashComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IconSkullComponent,
    IconEditComponent,
    IconPotionComponent,
    IconTrashComponent
  ]
})
export class IconsModule { }
