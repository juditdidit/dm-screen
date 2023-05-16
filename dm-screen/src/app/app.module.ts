import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InitiativeModule } from './sections/initiative/initiative.module';
import { MonstersModule } from './sections/monsters/monsters.module';
import { IconsModule } from './icons/icons.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InitiativeModule,
    MonstersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
