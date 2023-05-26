import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconCheckComponent } from './icon-check/icon-check.component';
import { IconEditComponent } from './icon-edit/icon-edit.component';
import { IconPotionComponent } from './icon-potion/icon-potion.component';
import { IconSkullComponent } from './icon-skull/icon-skull.component';
import { IconTrashComponent } from './icon-trash/icon-trash.component';
import { IconXComponent } from './icon-x/icon-x.component';



@NgModule({
    declarations: [
        IconEditComponent,
        IconPotionComponent,
        IconSkullComponent,
        IconTrashComponent,
        IconXComponent,
        IconCheckComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        IconSkullComponent,
        IconEditComponent,
        IconPotionComponent,
        IconTrashComponent,
        IconXComponent,
        IconCheckComponent,
    ]
})
export class IconsModule { }
