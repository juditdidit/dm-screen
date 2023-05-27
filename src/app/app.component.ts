import { Component, OnInit } from '@angular/core';

export type ALIGN = 'vertical' | 'horizontal';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    align: ALIGN = 'horizontal';

    toggleLayout(layout: ALIGN): void {
        this.align = layout;
        localStorage.setItem('align', layout);
    }

    ngOnInit(): void {
        this.align = localStorage.getItem('align') as ALIGN;
    }
}
