import { Component } from '@angular/core';
import { Creature, InitiativeService } from 'src/app/services/initiative.service';

@Component({
    selector: 'dnd-creature-list',
    templateUrl: './creature-list.component.html'
})
export class CreatureListComponent {
    constructor(public initiativeService: InitiativeService) { }

    /**
     * Return the unique ID of a creature.
     */
    getCreatureID(index: number, creature: Creature) {
        return creature.id;
    }
}
