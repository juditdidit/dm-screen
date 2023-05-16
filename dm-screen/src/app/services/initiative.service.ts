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
    readonly creaturesArr: Creature[] = [
        { id: 0, name: 'Ron Weasley', roll: 15, type: 'good', dead: false },
        { id: 1, name: 'Draco Malfoy', roll: 15, type: 'bad', dead: false },
        { id: 2, name: 'Nearly Headless Nick', roll: 15, type: 'good', dead: true },
        { id: 3, name: 'Crookshanks', roll: 15, type: 'neutral', dead: false },
    ]

    /**
     * Keeps a counter in order to assign a unique ID per creature added.
     */
    creatureCounter: number = 3; // Match the last ID in creaturesArr
    increaseCreatureCounter(): void {
        this.creatureCounter += 1;
    }

    /**
     * Sorts the creatures according to their initiative rolls.
     */
    private sortCreatures(): void {
        this.creaturesArr.sort((a, b) => b.roll - a.roll);
    }

    /**
     * Adds a creature to the initiative list.
     */
    addCreature(creature: Creature): void {
        this.creaturesArr.push(creature);
        this.sortCreatures();
    }

    /**
     * Removes a creature at the specified index from the initiative list.
     */
    removeCreature(index: number): void {
        this.creaturesArr.splice(index, 1);
    }

    /**
     * Empties the initiative list.
     */
    removeAllCreatures(): void {
        this.creaturesArr.splice(0);
    }

    /**
     * Updates a creature at the specified index in the initiative list.
     *
     * Only the properties being modified need to be specified.
     */
    updateCreature(index: number, updatedCreature: Partial<Creature>): void {
        this.creaturesArr[index] = { ...this.creaturesArr[index], ...updatedCreature };
        this.sortCreatures();
    }
}
