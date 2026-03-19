import { AirDefenseL1 } from "$lib/structures/defense/air-defense";
import { BlastBowL1 } from "$lib/structures/defense/blast-bow";
import { CannonL1 } from "$lib/structures/defense/cannon";
import { CrusherL1 } from "$lib/structures/defense/crusher";
import { GiantCannonL1 } from "$lib/structures/defense/giant-cannon";
import { HiddenMegaTeslaL1 } from "$lib/structures/defense/hidden-mega-tesla";
import { MultiCannonL1 } from "$lib/structures/defense/multi-cannon";
import { MultiMortarL1 } from "$lib/structures/defense/multi-mortar";
import { RapidRocketsL1 } from "$lib/structures/defense/rapid-rockets";
import { SpearThrowerL1 } from "$lib/structures/defense/spear-thrower";
import { WallL1 } from "$lib/structures/defense/wall";
import { SlantedHouse, SmallHut } from "$lib/structures/houses";
import { FrostSpellFactoryL1 } from "$lib/structures/offense/frost-spell-factory";
import { PowerPekkaBarracksL1 } from "$lib/structures/offense/power-pekka-barracks";
import { LogTrapL1 } from "$lib/structures/traps/log-trap";
import { MegaMineL1 } from "$lib/structures/traps/mega-mine";
import { MineL1 } from "$lib/structures/traps/mine";
import { ZapTrapL1 } from "$lib/structures/traps/zap-trap";
import { Ruin } from "$lib/types";

export const BW1Ruin1 = new Ruin({
    structures: [[HiddenMegaTeslaL1, 1]]
});

export const BW1Ruin2 = new Ruin({
    structures: [[MineL1, 2], [ZapTrapL1, 2]]
});

export const BW1Ruin3 = new Ruin({
    structures: [[CannonL1, 1], [RapidRocketsL1, 2], [CrusherL1, 1]]
});

export const BW1Ruin4 = new Ruin({
    structures: [[CannonL1, 1], [AirDefenseL1, 1], [MultiMortarL1, 1], [GiantCannonL1, 1]]
});

export const BW1Ruin5 = new Ruin({
    structures: [[WallL1, 30], [CannonL1, 1], [SpearThrowerL1, 2], [AirDefenseL1, 1], [MultiMortarL1, 1], [GiantCannonL1, 1]]
});

export const BW2Ruin1 = new Ruin({
    structures: [[MineL1, 1], [LogTrapL1, 1], [ZapTrapL1, 1]]
});

export const BW2Ruin2 = new Ruin({
    name: "Barracks Ruins",
    structures: [[PowerPekkaBarracksL1, 1], [SlantedHouse, 2]]
});

export const BW2Ruin3 = new Ruin({
    structures: [[SpearThrowerL1, 2], [AirDefenseL1, 1], [RapidRocketsL1, 1]]
});

export const BW2Ruin4 = new Ruin({
    structures: [[CannonL1, 1], [MultiCannonL1, 1], [AirDefenseL1, 1], [HiddenMegaTeslaL1, 1]]
});

export const BW2Ruin5 = new Ruin({
    structures: [[WallL1, 20], [BlastBowL1, 1]]
});

export const BW3Ruin1 = new Ruin({
    structures: [[MineL1, 1], [MegaMineL1, 1], [LogTrapL1, 1], [ZapTrapL1, 1]]
});

export const BW3Ruin2 = new Ruin({
    name: "Spell Factory Ruins",
    structures: [[FrostSpellFactoryL1, 1], [SmallHut, 3]]
});

export const BW3Ruin3 = new Ruin({
    structures: [[WallL1, 20], [MultiCannonL1, 1], [RapidRocketsL1, 1], [HiddenMegaTeslaL1, 1]]
});

export const BW3Ruin4 = new Ruin({
    structures: [[CannonL1, 1], [SpearThrowerL1, 1], [AirDefenseL1, 1], [GiantCannonL1, 1]]
});

export const BW4Ruin1 = new Ruin({
    structures: [[MegaMineL1, 1], [LogTrapL1, 1]]
});

export const BW4Ruin2 = new Ruin({
    structures: [[GiantCannonL1, 1], [SmallHut, 3]]
});

export const BW4Ruin3 = new Ruin({
    structures: [[WallL1, 20], [CannonL1, 1], [SpearThrowerL1, 1], [HiddenMegaTeslaL1, 1]]
});

export const BW5Ruin1 = new Ruin({
    structures: [[MegaMineL1, 1]]
});

export const BW5Ruin2 = new Ruin({
    structures: [[SpearThrowerL1, 1], [SmallHut, 2]]
});

export const BW5Ruin3 = new Ruin({
    structures: [[WallL1, 20], [BlastBowL1, 1]]
});