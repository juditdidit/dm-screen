import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KofiComponent } from './kofi/kofi.component';
import { InitiativeModule } from './sections/initiative/initiative.module';
import { MonstersModule } from './sections/monsters/monsters.module';

@NgModule({
    declarations: [
        AppComponent,
        KofiComponent
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
