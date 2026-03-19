import { Tree2_1 } from "$lib/structures/decorations";
import { AirDefenseL1 } from "$lib/structures/defense/air-defense";
import { BlastBowL1 } from "$lib/structures/defense/blast-bow";
import { CannonL1 } from "$lib/structures/defense/cannon";
import { CrusherL1 } from "$lib/structures/defense/crusher";
import { MultiCannonL1 } from "$lib/structures/defense/multi-cannon";
import { MultiMortarL1 } from "$lib/structures/defense/multi-mortar";
import { RapidRocketsL1 } from "$lib/structures/defense/rapid-rockets";
import { RocketArtilleryL1 } from "$lib/structures/defense/rocket-artillery";
import { SpearThrowerL1 } from "$lib/structures/defense/spear-thrower";
import { WallL1 } from "$lib/structures/defense/wall";
import { SlantedHouse, SmallHut, WoodenHouse } from "$lib/structures/houses";
import { LogTrapL1 } from "$lib/structures/traps/log-trap";
import { MineL1 } from "$lib/structures/traps/mine";
import { ZapTrapL1 } from "$lib/structures/traps/zap-trap";
import { Ruin } from "$lib/types";

export const GQ1Ruin1 = new Ruin({
    structures: [[MineL1, 1], [ZapTrapL1, 1]]
});

export const GQ1Ruin2 = new Ruin({
    structures: [[MineL1, 1], [LogTrapL1, 1], [ZapTrapL1, 1]]
});

export const GQ1Ruin3 = new Ruin({
    structures: [[CannonL1, 2], [AirDefenseL1, 1]]
});

export const GQ1Ruin4 = new Ruin({
    structures: [[SpearThrowerL1, 2], [AirDefenseL1, 1]]
});

export const GQ1Ruin5 = new Ruin({
    structures: [[CannonL1, 2], [SpearThrowerL1, 1], [AirDefenseL1, 1]]
});

export const GQ1Ruin6 = new Ruin({
    structures: [[CannonL1, 2], [SpearThrowerL1, 1], [AirDefenseL1, 1]]
});

export const GQ1Ruin7 = new Ruin({
    structures: [[RocketArtilleryL1, 1]]
});

export const GQ2Ruin1 = new Ruin({
    structures: [[CannonL1, 1], [SlantedHouse, 2], [WoodenHouse, 1]]
});

export const GQ2Ruin2 = new Ruin({
    structures: [[AirDefenseL1, 1], [WoodenHouse, 1]]
});

export const GQ2Ruin3 = new Ruin({
    structures: [[MineL1, 1], [LogTrapL1, 1], [ZapTrapL1, 1]]
});

export const GQ2Ruin4 = new Ruin({
    structures: [[WallL1, 20], [CannonL1, 2], [CrusherL1, 1]]
});

export const GQ2Ruin5 = new Ruin({
    structures: [[WallL1, 20], [SpearThrowerL1, 2], [MultiMortarL1, 1], [RapidRocketsL1, 1]]
});

export const GQ2Ruin6 = new Ruin({
    structures: [[CannonL1, 1], [MultiMortarL1, 1], [RocketArtilleryL1, 1]]
});

export const GQ3Ruin1 = new Ruin({
    structures: [[MineL1, 1], [LogTrapL1, 1], [ZapTrapL1, 1], [Tree2_1, 2]]
});

export const GQ3Ruin2 = new Ruin({
    structures: [[MultiCannonL1, 1], [RapidRocketsL1, 1], [WoodenHouse, 2]]
});

export const GQ3Ruin3 = new Ruin({
    structures: [[CannonL1, 1], [SpearThrowerL1, 1], [AirDefenseL1, 1], [MultiMortarL1, 1]]
});

export const GQ3Ruin4 = new Ruin({
    structures: [[WallL1, 20], [BlastBowL1, 1]]
});

export const GQ4Ruin1 = new Ruin({
    structures: [[ZapTrapL1, 1]]
});

export const GQ4Ruin2 = new Ruin({
    structures: [[WallL1, 20], [AirDefenseL1, 1], [SmallHut, 2]]
});

export const GQ4Ruin3 = new Ruin({
    structures: [[CannonL1, 1], [SpearThrowerL1, 1], [RocketArtilleryL1, 1]]
});

export const GQ5Ruin1 = new Ruin({
    structures: [[CannonL1, 1], [SpearThrowerL1, 1], [AirDefenseL1, 1], [SmallHut, 2]]
});

export const GQ5Ruin2 = new Ruin({
    structures: [[WallL1, 20], [BlastBowL1, 1]]
});