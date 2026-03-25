import { newCapitalHall } from "./capital-hall.svelte";
import { newDistrictHall } from "./district-hall.svelte";

export const noOfUpgrades = $state({ value: 0 });
export const goldSpent = $state({ value: 0 });



export const capitalHall = newCapitalHall();
export const bcDistrictHall = newDistrictHall("Barbarian Camp");




async function init() {
    // Read all districts' structures from local storage
    // Calculate no. of upgrades = sum of all buildings' current levels
    // Calculate gold spent = sum of all buildings' cost
}

init();