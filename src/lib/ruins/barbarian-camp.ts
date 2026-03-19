import { DeadTree, Tree1_2, Tree1_3, Tree1_4, Tree2_1, Tree2_2, Tree2_3 } from "$lib/structures/decorations";
import { AirBombsL1 } from "$lib/structures/defense/air-bombs";
import { AirDefenseL1 } from "$lib/structures/defense/air-defense";
import { BombTowerL1 } from "$lib/structures/defense/bomb-tower";
import { CannonL1 } from "$lib/structures/defense/cannon";
import { GiantCannonL1 } from "$lib/structures/defense/giant-cannon";
import { HiddenMegaTeslaL1 } from "$lib/structures/defense/hidden-mega-tesla";
import { MultiCannonL1 } from "$lib/structures/defense/multi-cannon";
import { MultiMortarL1 } from "$lib/structures/defense/multi-mortar";
import { RapidRocketsL1 } from "$lib/structures/defense/rapid-rockets";
import { RocketArtilleryL1 } from "$lib/structures/defense/rocket-artillery";
import { SpearThrowerL1 } from "$lib/structures/defense/spear-thrower";
import { SuperGiantPostL1 } from "$lib/structures/defense/super-giant-post";
import { WallL1 } from "$lib/structures/defense/wall";
import { SmallCabin, ThatchedHut } from "$lib/structures/houses";
import { ArmyCampL1 } from "$lib/structures/offense/army-camp";
import { BattleRamBarracksL1 } from "$lib/structures/offense/battle-ram-barracks";
import { MinionBarracksL1 } from "$lib/structures/offense/minion-barracks";
import { SuperGiantBarracksL1 } from "$lib/structures/offense/super-giant-barracks";
import { MegaMineL1 } from "$lib/structures/traps/mega-mine";
import { MineL1 } from "$lib/structures/traps/mine";
import { Ruin } from "$lib/types";

export const BC1Ruin1 = new Ruin({
    name: "Barracks Ruins",
    structures: [[SuperGiantBarracksL1, 1]],
});

export const BC1Ruin2 = new Ruin({
    name: "Barracks Ruins",
    structures: [[BattleRamBarracksL1, 1]],
});

export const BC1Ruin3 = new Ruin({
    structures: [[WallL1, 18], [MultiCannonL1, 1], [MultiMortarL1, 1]],
});

export const BC1Ruin4 = new Ruin({
    name: "Army Camp Ruins",
    structures: [[ArmyCampL1, 1]]
});

export const BC1Ruin5 = new Ruin({
    structures: [[MultiCannonL1, 1], [BombTowerL1, 2], [MultiMortarL1, 1]],
});

export const BC2Ruin1 = new Ruin({
    name: "Barracks Ruins",
    structures: [[MinionBarracksL1, 1], [SmallCabin, 1]]
});

export const BC2Ruin2 = new Ruin({
    structures: [[MineL1, 2], [MegaMineL1, 2]]
});

export const BC2Ruin3 = new Ruin({
    structures: [[WallL1, 24], [CannonL1, 2], [SpearThrowerL1, 2], [Tree2_2, 1], [Tree2_1, 1]],
});

export const BC2Ruin4 = new Ruin({
    structures: [[AirBombsL1, 2], [SmallCabin, 1], [ThatchedHut, 1]]
});

export const BC2Ruin5 = new Ruin({
    structures: [[WallL1, 26], [BombTowerL1, 1], [SuperGiantPostL1, 2], [Tree2_2, 1], [Tree2_3, 1]]
});

export const BC3Ruin1 = new Ruin({
    structures: [[MineL1, 2], [MegaMineL1, 1], [Tree1_4, 1]]
});

export const BC3Ruin2 = new Ruin({
    structures: [[CannonL1, 2], [AirDefenseL1, 1], [Tree1_2, 1]]
});

export const BC3Ruin3 = new Ruin({
    structures: [[SpearThrowerL1, 2], [AirDefenseL1, 1]]
});

export const BC3Ruin4 = new Ruin({
    structures: [[WallL1, 16], [RocketArtilleryL1, 1]]
});

export const BC3Ruin5 = new Ruin({
    structures: [[WallL1, 24], [RapidRocketsL1, 2], [SuperGiantPostL1, 1], [DeadTree, 1]]
});

export const BC3Ruin6 = new Ruin({
    structures: [[HiddenMegaTeslaL1, 1], [GiantCannonL1, 1]]
});

export const BC4Ruin1 = new Ruin({
    structures: [[MineL1, 2], [MegaMineL1, 1]]
});

export const BC4Ruin2 = new Ruin({
    structures: [[SpearThrowerL1, 1], [AirDefenseL1, 1], [MultiCannonL1, 1]]
});

export const BC4Ruin3 = new Ruin({
    structures: [[GiantCannonL1, 1], [ThatchedHut, 2]]
});

export const BC4Ruin4 = new Ruin({
    structures: [[WallL1, 20], [CannonL1, 1], [MultiCannonL1, 2], [RapidRocketsL1, 1]]
});

export const BC4Ruin5 = new Ruin({
    structures: [[WallL1, 20], [BombTowerL1, 1], [MultiMortarL1, 1], [AirBombsL1, 1], [HiddenMegaTeslaL1, 1]]
});

export const BC5Ruin1 = new Ruin({
    structures: [[MineL1, 1]]
});

export const BC5Ruin2 = new Ruin({
    structures: [[WallL1, 20], [MultiCannonL1, 1], [MultiMortarL1, 1], [Tree1_3, 1], [DeadTree, 1]]
});

export const BC5Ruin3 = new Ruin({
    structures: [[RapidRocketsL1, 1], [HiddenMegaTeslaL1, 1], [RocketArtilleryL1, 1], [Tree1_4, 1], [Tree1_3, 1]]
});