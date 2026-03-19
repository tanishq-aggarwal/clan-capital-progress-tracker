import { Grove1, Tree1_2, Tree1_4, Tree2_1, Tree2_2, Tree2_3 } from "$lib/structures/decorations";
import { AirBombsL1 } from "$lib/structures/defense/air-bombs";
import { AirDefenseL1 } from "$lib/structures/defense/air-defense";
import { BlastBowL1 } from "$lib/structures/defense/blast-bow";
import { BombTowerL1 } from "$lib/structures/defense/bomb-tower";
import { CannonL1 } from "$lib/structures/defense/cannon";
import { CrusherL1 } from "$lib/structures/defense/crusher";
import { GiantCannonL1 } from "$lib/structures/defense/giant-cannon";
import { HiddenMegaTeslaL1 } from "$lib/structures/defense/hidden-mega-tesla";
import { InfernoTowerL1 } from "$lib/structures/defense/inferno-tower";
import { MultiCannonL1 } from "$lib/structures/defense/multi-cannon";
import { MultiMortarL1 } from "$lib/structures/defense/multi-mortar";
import { RaidCartPostL1 } from "$lib/structures/defense/raid-cart-post";
import { RapidRocketsL1 } from "$lib/structures/defense/rapid-rockets";
import { RocketArtilleryL1 } from "$lib/structures/defense/rocket-artillery";
import { SpearThrowerL1 } from "$lib/structures/defense/spear-thrower";
import { SuperDragonPostL1 } from "$lib/structures/defense/super-dragon-post";
import { SuperGiantPostL1 } from "$lib/structures/defense/super-giant-post";
import { SuperWizardTowerL1 } from "$lib/structures/defense/super-wizard-tower";
import { WallL1 } from "$lib/structures/defense/wall";
import { LogTrapL1 } from "$lib/structures/traps/log-trap";
import { MegaMineL1 } from "$lib/structures/traps/mega-mine";
import { MineL1 } from "$lib/structures/traps/mine";
import { ZapTrapL1 } from "$lib/structures/traps/zap-trap";
import { DecorationSet, Ruin } from "$lib/types";

export const CP1Ruin1 = new Ruin({
    structures: [[CannonL1, 1], [SpearThrowerL1, 1]],
});

export const CP1Ruin2 = new Ruin({
    structures: [[CannonL1, 1], [AirDefenseL1, 1]],
});

export const CP2Ruin1 = new Ruin({
    structures: [[MultiCannonL1, 1]],
});

export const CP2Ruin2 = new Ruin({
    structures: [[MineL1, 1], [MegaMineL1, 2]],
});

export const CP2Ruin3 = new Ruin({
    structures: [[WallL1, 20], [MineL1, 1], [MegaMineL1, 2]],
});

export const CP2Ruin4 = new Ruin({
    structures: [[WallL1, 20], [BombTowerL1, 1], [MultiMortarL1, 1]],
});

export const CP2Dec1 = new DecorationSet({
    name: "Large Forest",
    decorations: [[Tree1_4, 1], [Tree1_2, 2], [Grove1, 1]]
});

export const CP3Ruin1 = new Ruin({
    structures: [[WallL1, 20], [MineL1, 2], [MegaMineL1, 1]],
});

export const CP3Ruin2 = new Ruin({
    structures: [[MultiCannonL1, 1], [SuperWizardTowerL1, 1]],
});

export const CP3Ruin3 = new Ruin({
    structures: [[WallL1, 20], [BombTowerL1, 1], [MultiMortarL1, 1], [AirBombsL1, 1]],
});

export const CP4Ruin1 = new Ruin({
    structures: [[MineL1, 2], [MegaMineL1, 1], [LogTrapL1, 1]],
});

export const CP4Ruin2 = new Ruin({
    structures: [[HiddenMegaTeslaL1, 1]],
});

export const CP4Ruin3 = new Ruin({
    structures: [[SuperWizardTowerL1, 1], [RapidRocketsL1, 1]],
});

export const CP4Ruin4 = new Ruin({
    structures: [[WallL1, 20], [AirBombsL1, 1], [RapidRocketsL1, 1], [CrusherL1, 1]],
});

export const CP5Ruin1 = new Ruin({
    structures: [[WallL1, 20], [MegaMineL1, 1], [LogTrapL1, 1], [ZapTrapL1, 1]],
});

export const CP5Ruin2 = new Ruin({
    structures: [[GiantCannonL1, 1]],
});

export const CP5Ruin3 = new Ruin({
    structures: [[RocketArtilleryL1, 1]],
});

export const CP5Ruin4 = new Ruin({
    structures: [[RapidRocketsL1, 2], [CrusherL1, 1], [HiddenMegaTeslaL1, 1]],
});

export const CP6Ruin1 = new Ruin({
    structures: [[MegaMineL1, 1], [LogTrapL1, 1], [ZapTrapL1, 1]],
});

export const CP6Ruin2 = new Ruin({
    structures: [[InfernoTowerL1, 1]],
});

export const CP6Ruin3 = new Ruin({
    structures: [[CannonL1, 1], [SpearThrowerL1, 1], [RapidRocketsL1, 2]],
});

export const CP6Ruin4 = new Ruin({
    structures: [[WallL1, 20], [BlastBowL1, 1]],
});

export const CP7Ruin1 = new Ruin({
    structures: [[MegaMineL1, 1], [LogTrapL1, 1], [ZapTrapL1, 1]],
});

export const CP7Ruin2 = new Ruin({
    structures: [[CannonL1, 1], [SpearThrowerL1, 1], [RapidRocketsL1, 1]],
});

export const CP7Ruin3 = new Ruin({
    structures: [[WallL1, 20], [RapidRocketsL1, 1], [GiantCannonL1, 1]],
});

export const CP8Ruin1 = new Ruin({
    structures: [[MegaMineL1, 1], [ZapTrapL1, 1]],
});

export const CP8Ruin2 = new Ruin({
    structures: [[SuperGiantPostL1, 1]],
});

export const CP8Ruin3 = new Ruin({
    structures: [[WallL1, 20], [RocketArtilleryL1, 1], [Tree2_2, 1], [Tree2_1, 1]],
});

export const CP9Ruin1 = new Ruin({
    structures: [[MegaMineL1, 1], [ZapTrapL1, 1]],
});

export const CP9Ruin2 = new Ruin({
    structures: [[WallL1, 20], [RaidCartPostL1, 1], [Tree2_2, 1], [Tree2_3, 1]],
});

export const CP9Ruin3 = new Ruin({
    structures: [[InfernoTowerL1, 1]],
});

export const CP10Ruin1 = new Ruin({
    structures: [[MegaMineL1, 1]],
});

export const CP10Ruin2 = new Ruin({
    structures: [[SuperDragonPostL1, 1]],
});

export const CP10Ruin3 = new Ruin({
    structures: [[BlastBowL1, 1]],
});