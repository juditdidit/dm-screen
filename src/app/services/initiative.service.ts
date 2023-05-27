import { Injectable } from '@angular/core';

export type CREATURE_TYPE = 'good' | 'bad' | 'neutral';

export interface Creature {
    id: number;
    name: string;
    roll: number;
    type: CREATURE_TYPE;
    dead: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class InitiativeService {
    creaturesList: Creature[] = [];
    creatureCounter: number = 0;

    /**
     * Keep a counter in order to assign a unique ID per creature added.
     */
    increaseCreatureCounter(): void {
        this.creatureCounter += 1;
    }

    /**
     * Sorts the creatures according to their initiative rolls.
     */
    private sortCreatures(): void {
        this.creaturesList.sort((a, b) => b.roll - a.roll);
    }

    /**
     * Load creatures saved to localStorage.
     */
    getCreatures(): void {
        this.creaturesList = JSON.parse(localStorage.getItem('creaturesList') || '[]');

        // Find current largest id
        const newestCreature = this.creaturesList.reduce((prev, current) => (prev.id > current.id) ? prev : current, { id: 0 })
        this.creatureCounter = newestCreature.id;
    }

    /**
     * Adds a creature to the initiative list.
     */
    addCreature(creature: Creature): void {
        this.creaturesList.push(creature);
        this.sortCreatures();
        localStorage.setItem('creaturesList', JSON.stringify(this.creaturesList));
    }

    /**
     * Removes a creature at the specified index from the initiative list.
     */
    removeCreature(creatureId: number): void {
        const creatureIndex = this.creaturesList.findIndex(creature => creature.id === creatureId);
        this.creaturesList.splice(creatureIndex, 1);
        localStorage.setItem('creaturesList', JSON.stringify(this.creaturesList));
    }

    /**
     * Empties the initiative list.
     */
    removeAllCreatures(): void {
        this.creaturesList.splice(0);
        localStorage.removeItem('creaturesList');
        this.creatureCounter = 0;
    }

    /**
     * Updates a creature at the specified index in the initiative list.
     * Only the properties being modified need to be specified.
     */
    updateCreature(creatureId: number, updatedInfo: Partial<Creature>): void {
        const creatureIndex = this.creaturesList.findIndex(creature => creature.id === creatureId);
        this.creaturesList[creatureIndex] = { ...this.creaturesList[creatureIndex], ...updatedInfo };
        this.sortCreatures();
        localStorage.setItem('creaturesList', JSON.stringify(this.creaturesList));
    }
}
