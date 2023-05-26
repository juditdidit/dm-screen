import { Component } from '@angular/core';
import { Monster, MonstersService } from 'src/app/services/monsters.service';

@Component({
    selector: 'dnd-monster-list',
    templateUrl: './monster-list.component.html'
})
export class MonsterListComponent {
    constructor(public monstersService: MonstersService) {}

    /**
     * Return the unique ID of a given monster.
     */
    getMonsterID(index: number, monster: Monster) {
        // TODO: index or id or both?
        console.log(index, monster, monster.id);
        return monster.id;
    }

    removeAllMonsters(): void {
        this.monstersService.removeAllMonsters();
    }
}
