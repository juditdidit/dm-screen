import { Component, OnInit } from '@angular/core';
import { Monster, MonstersService } from 'src/app/services/monsters.service';

@Component({
    selector: 'dnd-monster-list',
    templateUrl: './monster-list.component.html'
})
export class MonsterListComponent implements OnInit {
    monsters: Monster[] = [];

    constructor(private monstersService: MonstersService) {}

    /**
     * Return the unique ID of a given monster.
     */
    getMonsterID(index: number, monster: Monster) {
        return monster.id;
    }

    removeAllMonsters(): void {
        this.monstersService.removeAllMonsters();
    }

    ngOnInit(): void {
        this.monstersService.getMonsters();
        this.monsters = this.monstersService.monstersList;
    }
}
