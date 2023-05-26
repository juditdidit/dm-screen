import { Component, Input } from '@angular/core';
import { Monster, MonstersService } from 'src/app/services/monsters.service';

@Component({
    selector: 'dnd-monster',
    templateUrl: './monster.component.html',
    styleUrls: ['./monster.component.scss']
})
export class MonsterComponent {
    @Input() monster!: Monster;

    // Defaults used when updating a monster's info
    monsterName: string = 'Abominable Monster';
    adjustHealthBy: number | null = null;
    currentHP = 0;
    maxHP = 0;

    editingMonster = false;

    constructor(private monstersService: MonstersService) {}

    /** Ensure current HP doesn't fall below 0 */
    checkMinHP(): void {
        if (this.currentHP < 0) {
            this.currentHP = 0;
        }
    }

    /** Ensure current HP doesn't go above max HP */
    checkMaxHP(): void {
        if (this.currentHP > this.maxHP) {
            this.currentHP = this.maxHP;
        }
    }

    /**
     * Add damage to the monster's health.
     */
    damageMonster(): void {
        this.currentHP = this.monster.currentHP - (this.adjustHealthBy || 0);
        this.checkMinHP();

        this.monstersService.updateMonster(
            this.monster.id,
            {
                ...this.monster,
                currentHP: this.currentHP,
            },
        );

        // Clear the input value
        this.adjustHealthBy = null;
    }

    /**
     * Heal the monster's health.
     */
    healMonster(): void {
        this.currentHP = this.monster.currentHP + (this.adjustHealthBy || 0);
        this.maxHP = this.monster.maxHP;
        this.checkMaxHP();

        this.monstersService.updateMonster(
            this.monster.id,
            {
                ...this.monster,
                currentHP: this.currentHP,
            },
        );

        // Clear the input value
        this.adjustHealthBy = null;
    }

    removeMonster(): void {
        this.monstersService.removeMonster(this.monster.id);
    }

    /**
     * Turn on edit mode for the monster.
     */
    editMonster(): void {
        this.editingMonster = true;

        // Get monster's current info
        this.monsterName = this.monster.name;
        this.currentHP = this.monster.currentHP;
        this.maxHP = this.monster.maxHP;
    }

    stopEdit(): void {
        this.editingMonster = false;
    }

    updateMonster(): void {
        this.checkMinHP();
        this.checkMaxHP();

        this.monstersService.updateMonster(
            this.monster.id,
            {
                ...this.monster,
                name: this.monsterName,
                currentHP: this.currentHP,
                maxHP: this.maxHP,
            },
        );
        this.stopEdit();
    }
}
