import { Component, Input } from '@angular/core';
import { CREATURE_TYPE, Creature, InitiativeService } from 'src/app/services/initiative.service';

@Component({
    selector: 'dnd-creature',
    templateUrl: './creature.component.html',
    styleUrls: ['./creature.component.scss']
})
export class CreatureComponent {
    @Input() creature!: Creature;

    // Indicates whether the creature is in editing mode
    editingCreature = false;

    // Defaults used when updating a creature's info
    creatureName = 'Nameless';
    creatureRoll = 0;
    creatureType: CREATURE_TYPE = 'neutral';

    constructor(private initiativeService: InitiativeService) {}

    /**
     * Remove the creature.
     */
    removeCreature(): void {
        this.initiativeService.removeCreature(this.creature.id);
    }

    /**
     * Turn on editing mode.
     */
    editCreature(): void {
        this.editingCreature = true;

        // Get current creature's data
        this.creatureName = this.creature.name;
        this.creatureRoll = this.creature.roll;
        this.creatureType = this.creature.type;
    }

    /**
     * Turn off editing mode.
     */
    stopEdit(): void {
        this.editingCreature = false;
    }

    /**
     * Update creature data.
     */
    updateCreature(): void {
        this.initiativeService.updateCreature(
            this.creature.id,
            {
                ...this.creature,
                name: this.creatureName,
                roll: this.creatureRoll,
                type: this.creatureType,
            },
        );
        this.stopEdit();
    }

    /**
     * Toggle the creature's dead status.
     */
    toggleDeadStatus(): void {
        this.initiativeService.updateCreature(
            this.creature.id,
            {
                ...this.creature,
                dead: !this.creature.dead,
            },
        );
    }
}
