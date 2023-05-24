import { Injectable } from '@angular/core';

export interface Monster {
    id: number;
    name: string;
    currentHP: number;
    maxHP: number;
}

@Injectable({
    providedIn: 'root'
})
export class MonstersService {
    readonly monstersArr: Monster[] = [
        { id: 0, name: 'Voldemort', currentHP: 399, maxHP: 800 },
        { id: 1, name: 'Hungarian Horntail', currentHP: 999, maxHP: 999 },
        { id: 2, name: 'just a troll', currentHP: 5, maxHP: 30 },
    ];

    /**
     * Keeps a counter in order to assign a unique ID per monster added.
     */
    monsterCounter: number = 2; // Match the last ID in monstersArr
    increaseMonsterCounter(): void {
        this.monsterCounter += 1;
    }

    /**
     * Add a new monster to the monsters list.
     */
    addMonster(newMonster: Monster): void {
        this.monstersArr.push(newMonster);
    }

    /** Empties the monster list. */
    removeAllMonsters(): void {
        this.monstersArr.splice(0);
    }

    /**
     * Adjust a monster's healthy based on healing or damage taken.
     */
    updateMonsterHealth(index: number, updatedMonster: Partial<Monster>): void {
        this.monstersArr[index] = { ...this.monstersArr[index], ...updatedMonster };
    }
}
