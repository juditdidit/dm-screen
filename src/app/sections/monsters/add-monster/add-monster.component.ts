import { Component } from '@angular/core';
import { MonstersService } from 'src/app/services/monsters.service';

@Component({
    selector: 'dnd-add-monster',
    templateUrl: './add-monster.component.html'
})
export class AddMonsterComponent {
    // Initial form data
    monsterName = '';
    monsterHealth: number | null = null;

    constructor(private monstersService: MonstersService) {}

    /**
     * Adds the monster data to the monsters list
     */
    addMonster(): void {
        this.monstersService.increaseMonsterCounter();
        this.monstersService.addMonster({
            id: this.monstersService.monsterCounter,
            name: this.monsterName || "Abominable Monster",
            currentHP: this.monsterHealth || 0,
            maxHP: this.monsterHealth || 0
        });

        // Clear the input values
        this.monsterName = '';
        this.monsterHealth = null;
    };
}
