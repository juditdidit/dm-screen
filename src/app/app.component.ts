import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    align: 'vertical' | 'horizontal' = 'horizontal';

    toggleLayout(layout: 'vertical' | 'horizontal'): void {
        this.align = layout;
    }
}
