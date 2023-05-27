import { Component, OnInit } from '@angular/core';
import { Creature, InitiativeService } from 'src/app/services/initiative.service';

@Component({
    selector: 'dnd-creature-list',
    templateUrl: './creature-list.component.html'
})
export class CreatureListComponent implements OnInit {
    creatures: Creature[] = [];

    constructor(private initiativeService: InitiativeService) { }

    /**
     * Return the unique ID of a creature.
     */
    getCreatureID(index: number, creature: Creature) {
        return creature.id;
    }

    removeAllCreatures(): void {
        this.initiativeService.removeAllCreatures();
    }

    ngOnInit(): void {
        this.initiativeService.getCreatures();
        this.creatures = this.initiativeService.creaturesList;
    }
}
