import type { newDistrictHall } from "./district-hall.svelte";

export function newDistrict(name: "Barbarian Camp" | "Capital Peak", districtHall: ReturnType<typeof newDistrictHall>) {
    const structures = $state([]);
    const unlockableRuins = $state([]);

    const _isLocked = $derived(districtHall.state.currentLevel < 1);

    $effect(() => {
        districtHall.state.currentLevel;
        if (name === "Barbarian Camp") {
            if (districtHall.state.currentLevel === 1) {
                unlockableRuins.push();
            }
        }
    });


    return {
        get isLocked() {
            return _isLocked;
        },
        structures,
        unlockableRuins
    }
}