<script lang="ts">
    import CapitalHall from "../components/CapitalHall.svelte";
    import { goldSpent, noOfUpgrades } from "../components/globals.svelte";
</script>

<h1>No of upgrades:</h1>
<input type="number" bind:value={noOfUpgrades.value} />
<button class="bg-gray-400 border-gray-600 p-4" onclick={() => noOfUpgrades.value++}>Increase no of upgrades</button>

<h1>Gold spent: {goldSpent.value}</h1>

<CapitalHall />