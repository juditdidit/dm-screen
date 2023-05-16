import { Component } from '@angular/core';
import { CREATURE_TYPE, InitiativeService } from 'src/app/services/initiative.service';

@Component({
    selector: 'dnd-add-creature',
    templateUrl: './add-creature.component.html'
})
export class AddCreatureComponent {
    // Initial form data
    creatureName = '';
    creatureRoll: number | null = null;
    creatureType: CREATURE_TYPE = 'neutral';

    constructor(private initiativeService: InitiativeService) {}

    /**
     * Adds creature data to the initiative list.
     */
    addCreature(): void {
        this.initiativeService.increaseCreatureCounter();
        this.initiativeService.addCreature({
            id: this.initiativeService.creatureCounter,
            name: this.creatureName || 'Nameless',
            roll: this.creatureRoll || 0,
            type: this.creatureType,
            dead: false,
        });

        // Clear the input values
        this.creatureName = '';
        this.creatureRoll = null;
        this.creatureType = 'neutral';
    }
}
