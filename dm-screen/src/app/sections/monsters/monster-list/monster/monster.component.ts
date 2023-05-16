import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Monster } from 'src/app/services/monsters.service';

@Component({
    selector: 'dnd-monster',
    templateUrl: './monster.component.html',
    styleUrls: ['./monster.component.scss']
})
export class MonsterComponent {

    @Input() monster!: Monster;
    @Output() updateMonsterHealthEvent = new EventEmitter<Monster>();

    // Defaults used when changing creature health.
    adjustHealthBy: number | null = null;
    currentHP = 0;
    maxHP = 0;

    /**
     * Add damage to a monster's health.
     */
    damageMonster(): void {
        this.currentHP = this.monster.currentHP - (this.adjustHealthBy || 0);

        // Ensure HP doesn't fall below 0
        if (this.currentHP < 0) {
            this.currentHP = 0;
        }

        this.updateMonsterHealthEvent.emit({
            ...this.monster, currentHP: this.currentHP
        })

        // Clear the input value
        this.adjustHealthBy = null;
    }

    /**
     * Heal a monster's health
     */
    healMonster(): void {
        this.currentHP = this.monster.currentHP + (this.adjustHealthBy || 0);

        // Ensure HP does not go above max HP
        this.maxHP = this.monster.maxHP;
        if (this.currentHP > this.maxHP) {
            this.currentHP = this.maxHP;
        }

        this.updateMonsterHealthEvent.emit({
            ...this.monster, currentHP: this.currentHP
        })

        // Clear the input value
        this.adjustHealthBy = null;
    }
}
