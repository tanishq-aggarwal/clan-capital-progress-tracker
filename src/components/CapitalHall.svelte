<script lang="ts">
    import { goldSpent, noOfUpgrades } from "./globals.svelte";

    const name = "Capital Hall";

    let currentLevel = $state(1);
    const maxLevel = 10;

    const isUpgradable = $derived.by(() => {
        if (currentLevel >= maxLevel) return false;
        if (noOfUpgrades.value >= 15 && currentLevel < 2)
            return true;
        else if (noOfUpgrades.value >= 65 && currentLevel < 3)
            return true;
        else if (noOfUpgrades.value >= 165 && currentLevel < 4)
            return true;
        else if (noOfUpgrades.value >= 285 && currentLevel < 5)
            return true;
        else if (noOfUpgrades.value >= 480 && currentLevel < 6)
            return true;
        else if (noOfUpgrades.value >= 670 && currentLevel < 7)
            return true;
        else if (noOfUpgrades.value >= 1_090 && currentLevel < 8)
            return true;
        else if (noOfUpgrades.value >= 1_500 && currentLevel < 9)
            return true;
        else if (noOfUpgrades.value >= 2_000 && currentLevel < 10)
            return true;
        return false;
    });

    const nextUpgradeCost = $derived.by(() => {
        if (currentLevel === 1) return 50_000;
        else if (currentLevel === 2) return 75_000;
        else if (currentLevel === 3) return 100_000;
        else if (currentLevel === 4) return 150_000;
        else if (currentLevel === 5) return 200_000;
        else if (currentLevel === 6) return 400_000;
        else if (currentLevel === 7) return 600_000;
        else if (currentLevel === 8) return 800_000;
        else if (currentLevel === 9) return 1_000_000;
        return 0;
    });
    
    const imageUrl = $derived.by(() => {
        if (currentLevel === 1) return "https://static.wikia.nocookie.net/clashofclans/images/e/ed/Capital_Hall1.png";
        else if (currentLevel === 2) return "https://static.wikia.nocookie.net/clashofclans/images/e/ea/Capital_Hall2.png";
        else if (currentLevel === 3) return "https://static.wikia.nocookie.net/clashofclans/images/f/fb/Capital_Hall3.png";
        else if (currentLevel === 4) return "https://static.wikia.nocookie.net/clashofclans/images/f/fa/Capital_Hall4.png";
        else if (currentLevel === 5) return "https://static.wikia.nocookie.net/clashofclans/images/8/86/Capital_Hall5.png";
        else if (currentLevel === 6) return "https://static.wikia.nocookie.net/clashofclans/images/d/d2/Capital_Hall6.png";
        else if (currentLevel === 7) return "https://static.wikia.nocookie.net/clashofclans/images/a/a5/Capital_Hall7.png";
        else if (currentLevel === 8) return "https://static.wikia.nocookie.net/clashofclans/images/1/14/Capital_Hall8.png";
        else if (currentLevel === 9) return "https://static.wikia.nocookie.net/clashofclans/images/4/46/Capital_Hall9.png";
        else if (currentLevel === 10) return "https://static.wikia.nocookie.net/clashofclans/images/2/2c/Capital_Hall10.png";
    });

    function upgrade() {
        if (!isUpgradable) return;
        goldSpent.value += nextUpgradeCost;
        noOfUpgrades.value++;
        currentLevel++;
    }
</script>


<div class="card max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden mt-8 p-6 flex flex-col items-center border border-gray-200">
    <h2 class="text-2xl font-bold mb-2 text-gray-800">{name}</h2>
    <div class="w-48 h-48 flex items-center justify-center mb-4">
        <img src={imageUrl} alt={name} class="object-contain h-full w-full" />
    </div>
    <div class="mb-4 text-lg font-medium text-gray-600">
        Level: {currentLevel}
    </div>
    {#if currentLevel < 10}
        <button
            class="px-6 py-3 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold shadow transition duration-150 disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={!isUpgradable}
            onclick={upgrade}
        >
            Upgrade for {nextUpgradeCost.toLocaleString()} Gold
        </button>
    {:else}
        <button
            class="px-6 py-3 rounded-lg bg-gray-400 text-white font-semibold shadow cursor-not-allowed"
            disabled
        >
            MAX level
        </button>
    {/if}
</div>