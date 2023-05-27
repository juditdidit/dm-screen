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
    monstersList: Monster[] = [];
    monsterCounter: number = 0;

    /**
     * Keep a counter in order to assign a unique ID per monster added.
     */
    increaseMonsterCounter(): void {
        this.monsterCounter += 1;
    }

    /**
     * Load monsters saved to localStorage.
     */
    getMonsters(): void {
        this.monstersList = JSON.parse(localStorage.getItem('monstersList') || '[]');

        // Find current largest id
        const newestMonster = this.monstersList.reduce((prev, current) => (prev.id > current.id) ? prev : current, { id: 0 });
        this.monsterCounter = newestMonster.id;
        console.log(this.monsterCounter);
    }

    /**
     * Add a new monster to the monsters list.
     */
    addMonster(newMonster: Monster): void {
        this.monstersList.push(newMonster);
        localStorage.setItem('monstersList', JSON.stringify(this.monstersList));
    }

    /**
     * Remove a monster at the specified index.
     */
    removeMonster(monsterId: number): void {
        const monsterIndex = this.monstersList.findIndex(monster => monster.id === monsterId);
        this.monstersList.splice(monsterIndex, 1);
        localStorage.setItem('monstersList', JSON.stringify(this.monstersList));
    }

    /**
     * Empties the monster list.
     */
    removeAllMonsters(): void {
        this.monstersList.splice(0);
        localStorage.removeItem('monstersList');
        this.monsterCounter = 0;
    }

    /**
     * Updates a monster's data
     */
    updateMonster(monsterId: number, updatedInfo: Partial<Monster>): void {
        const monsterIndex = this.monstersList.findIndex(monster => monster.id === monsterId);
        this.monstersList[monsterIndex] = { ...this.monstersList[monsterIndex], ...updatedInfo };
        localStorage.setItem('monstersList', JSON.stringify(this.monstersList));
    }
}
