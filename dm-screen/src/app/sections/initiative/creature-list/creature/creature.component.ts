import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CREATURE_TYPE, Creature } from 'src/app/services/initiative.service';

@Component({
    selector: 'dnd-creature',
    templateUrl: './creature.component.html',
    styleUrls: ['./creature.component.scss']
})
export class CreatureComponent {
    @Input() creature!: Creature;
    @Output() updateCreatureEvent = new EventEmitter<Creature>();
    @Output() removeCreatureEvent = new EventEmitter<null>();

    // Indicates whether the creature is in editing mode.
    editingCreature = false;

    // Default form data to be used when updating a creature.
    updatedCreatureName = 'Nameless';
    updatedCreatureRoll = 0;
    updatedCreatureType: CREATURE_TYPE = 'neutral';

    /**
     * Remove the current creature
     */
    removeCreature(): void {
        this.removeCreatureEvent.emit();
    }

    /**
     * Turn on editing mode.
     */
    editCreature(): void {
        this.editingCreature = true;

        // Get current creature's data
        this.updatedCreatureName = this.creature.name;
        this.updatedCreatureRoll = this.creature.roll;
        this.updatedCreatureType = this.creature.type;
    }

    /**
     * Turn off eidting mode.
     */
    stopEdit(): void {
        this.editingCreature = false;
    }

    /**
     * Update creature data.
     */
    updateCreature(): void {
        this.updateCreatureEvent.emit({
            ...this.creature,
            name: this.updatedCreatureName,
            roll: this.updatedCreatureRoll,
            type: this.updatedCreatureType,
        })
        this.stopEdit();
    }

    /**
     * Toggle creature's dead status.
     */
    toggleDeadStatus(): void {
        this.updateCreatureEvent.emit({
            ...this.creature, dead: !this.creature.dead
        });
    }
}
