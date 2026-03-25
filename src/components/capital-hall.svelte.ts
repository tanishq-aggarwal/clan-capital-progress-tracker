import { goldSpent, noOfUpgrades } from "./globals.svelte";

export function newCapitalHall() {
    const state = $state({
        currentLevel: 1
    });

    const isUpgradable = $derived.by(() => {
        if (noOfUpgrades.value >= 15 && state.currentLevel < 2)
            return true;
        else if (noOfUpgrades.value >= 65 && state.currentLevel < 3)
            return true;
        else if (noOfUpgrades.value >= 165 && state.currentLevel < 4)
            return true;
        else if (noOfUpgrades.value >= 285 && state.currentLevel < 5)
            return true;
        else if (noOfUpgrades.value >= 480 && state.currentLevel < 6)
            return true;
        else if (noOfUpgrades.value >= 670 && state.currentLevel < 7)
            return true;
        else if (noOfUpgrades.value >= 1_090 && state.currentLevel < 8)
            return true;
        else if (noOfUpgrades.value >= 1_500 && state.currentLevel < 9)
            return true;
        else if (noOfUpgrades.value >= 2_000 && state.currentLevel < 10)
            return true;
        return false;
    });

    const nextUpgradeCost = $derived.by(() => {
        if (state.currentLevel === 1) return 50_000;
        else if (state.currentLevel === 2) return 75_000;
        else if (state.currentLevel === 3) return 100_000;
        else if (state.currentLevel === 4) return 150_000;
        else if (state.currentLevel === 5) return 200_000;
        else if (state.currentLevel === 6) return 400_000;
        else if (state.currentLevel === 7) return 600_000;
        else if (state.currentLevel === 8) return 800_000;
        else if (state.currentLevel === 9) return 1_000_000;
        return 0;
    });

    const imageUrl = $derived.by(() => {
        if (state.currentLevel === 1) return "https://static.wikia.nocookie.net/clashofclans/images/e/ed/Capital_Hall1.png";
        else if (state.currentLevel === 2) return "https://static.wikia.nocookie.net/clashofclans/images/e/ea/Capital_Hall2.png";
        else if (state.currentLevel === 3) return "https://static.wikia.nocookie.net/clashofclans/images/f/fb/Capital_Hall3.png";
        else if (state.currentLevel === 4) return "https://static.wikia.nocookie.net/clashofclans/images/f/fa/Capital_Hall4.png";
        else if (state.currentLevel === 5) return "https://static.wikia.nocookie.net/clashofclans/images/8/86/Capital_Hall5.png";
        else if (state.currentLevel === 6) return "https://static.wikia.nocookie.net/clashofclans/images/d/d2/Capital_Hall6.png";
        else if (state.currentLevel === 7) return "https://static.wikia.nocookie.net/clashofclans/images/a/a5/Capital_Hall7.png";
        else if (state.currentLevel === 8) return "https://static.wikia.nocookie.net/clashofclans/images/1/14/Capital_Hall8.png";
        else if (state.currentLevel === 9) return "https://static.wikia.nocookie.net/clashofclans/images/4/46/Capital_Hall9.png";
        else return "https://static.wikia.nocookie.net/clashofclans/images/2/2c/Capital_Hall10.png";
    });

    function upgrade() {
        if (!isUpgradable) return;
        goldSpent.value += nextUpgradeCost;
        noOfUpgrades.value++;
        state.currentLevel++;
    }

    return {
        state,
        get isUpgradable() {
            return isUpgradable;
        },
        get nextUpgradeCost() {
            return nextUpgradeCost;
        },
        get imageUrl() {
            return imageUrl;
        },
        upgrade
    }
}