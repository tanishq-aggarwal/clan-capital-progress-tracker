import { capitalHall, goldSpent, noOfUpgrades } from "./globals.svelte";

export function newDistrictHall(districtName: "Barbarian Camp") {
    const state = $state({
        currentLevel: 0
    });

    const _isUpgradable = $derived.by(() => {
        if (districtName === "Barbarian Camp") {
            if (capitalHall.state.currentLevel >= 2 && state.currentLevel < 1)
                return true;
            else if (capitalHall.state.currentLevel >= 3 && state.currentLevel < 2)
                return true;
            else if (capitalHall.state.currentLevel >= 5 && state.currentLevel < 3)
                return true;
            else if (capitalHall.state.currentLevel >= 7 && state.currentLevel < 4)
                return true;
            else if (capitalHall.state.currentLevel >= 9 && state.currentLevel < 5)
                return true;
            return false;
        }
    });

    const _nextUpgradeCost = $derived.by(() => {
        if (state.currentLevel === 1) return 25_000;
        else if (state.currentLevel === 2) return 75_000;
        else if (state.currentLevel === 3) return 150_000;
        else if (state.currentLevel === 4) return 300_000;
        return 0;
    });

    const _imageUrl = $derived.by(() => {
        if (state.currentLevel === 1) return "https://static.wikia.nocookie.net/clashofclans/images/d/dd/District_Hall1.png";
        else if (state.currentLevel === 2) return "https://static.wikia.nocookie.net/clashofclans/images/1/11/District_Hall2.png";
        else if (state.currentLevel === 3) return "https://static.wikia.nocookie.net/clashofclans/images/c/ce/District_Hall3.png";
        else if (state.currentLevel === 4) return "https://static.wikia.nocookie.net/clashofclans/images/9/9c/District_Hall4.png";
        else return "https://static.wikia.nocookie.net/clashofclans/images/3/32/District_Hall5.png";
    });

    function upgrade() {
        if (!_isUpgradable) return;
        goldSpent.value += _nextUpgradeCost;
        noOfUpgrades.value++;
        state.currentLevel++;
    }

    return {
        state,
        get isUpgradable() {
            return _isUpgradable;
        },
        get nextUpgradeCost() {
            return _nextUpgradeCost;
        },
        get imageUrl() {
            return _imageUrl;
        },
        upgrade
    }
}