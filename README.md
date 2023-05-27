# DM Screen

During the pandemic I picked up D&D as a hobby. As an engineer, I thought "how can I over-engineer a simple thing such as tracking initiative order." And so here we are. Bonus points for tracking monster health as well!

## Features

### Initiative tracker
* The initiative tracker automatically sorts creatures by their input roll as they're added to the list
* Edit creature name, alignment and roll count if needed
* Add or remove creatures from the list
* Click on a creature's name to toggle between unconscious and alive 

### Monster tracker
* Track your monsters' health by adding damage or healing. The health bar adjusts accordingly. If a monster falls to 0 HP, an unconscious styling is applied
* Edit monster name, current HP, and max HP if needed
* A calculator is in place to ensure HP never falls under 0, or exceeds the max HP

---

![Screenshot](DM-screen-demo.png)

---

# Dev notes

## Running locally
1. Install angular `npm install -g @angular/cli`
2. Set up a new project `ng new my-app`
3. Navigate to the project `cd my-app`
4. Spin up a local server `ng serve`
5. Navigate to `http://localhost:4200`

## Deploying to Github pages
1. Navigate to the Angular app `cd my-app`
2. `ng build --output-path docs --base-href /repo-name/`
    - `--output-path` indicates where to build the files
    - `--base-href` sets the application base path
