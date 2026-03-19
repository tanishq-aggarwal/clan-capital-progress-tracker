import { AirBombsL1 } from "$lib/structures/defense/air-bombs";
import { AirDefenseL1 } from "$lib/structures/defense/air-defense";
import { BlastBowL1 } from "$lib/structures/defense/blast-bow";
import { BombTowerL1 } from "$lib/structures/defense/bomb-tower";
import { CannonL1 } from "$lib/structures/defense/cannon";
import { InfernoTowerL1 } from "$lib/structures/defense/inferno-tower";
import { SpearThrowerL1 } from "$lib/structures/defense/spear-thrower";
import { SuperDragonPostL1 } from "$lib/structures/defense/super-dragon-post";
import { SuperWizardTowerL1 } from "$lib/structures/defense/super-wizard-tower";
import { WallL1 } from "$lib/structures/defense/wall";
import { SmallHut, ThatchedHut } from "$lib/structures/houses";
import { HogRaiderBarracksL1 } from "$lib/structures/offense/hog-raider-barracks";
import { SuperDragonBarracksL1 } from "$lib/structures/offense/super-dragon-barracks";
import { MineL1 } from "$lib/structures/traps/mine";
import { ZapTrapL1 } from "$lib/structures/traps/zap-trap";
import { Ruin } from "$lib/types";

export const DC1Ruin1 = new Ruin({
    structures: [[SpearThrowerL1, 2], [AirDefenseL1, 1]]
});

export const DC1Ruin2 = new Ruin({
    name: "Barracks Ruins",
    structures: [[HogRaiderBarracksL1, 1]]
});

export const DC1Ruin3 = new Ruin({
    structures: [[CannonL1, 1], [SuperWizardTowerL1, 1], [AirBombsL1, 1]]
});

export const DC1Ruin4 = new Ruin({
    structures: [[BombTowerL1, 1], [SuperDragonPostL1, 1]]
});

export const DC1Ruin5 = new Ruin({
    structures: [[SpearThrowerL1, 2], [AirDefenseL1, 1], [SuperDragonPostL1, 1]]
});

export const DC1Ruin6 = new Ruin({
    structures: [[SpearThrowerL1, 1], [BlastBowL1, 1]]
});

export const DC2Ruin1 = new Ruin({
    structures: [[MineL1, 2], [ZapTrapL1, 1]]
});

export const DC2Ruin2 = new Ruin({
    name: "Barracks Ruins",
    structures: [[SuperDragonBarracksL1, 1]]
});

export const DC2Ruin3 = new Ruin({
    structures: [[SuperDragonPostL1, 1], [ThatchedHut, 2]]
});

export const DC2Ruin4 = new Ruin({
    structures: [[WallL1, 20], [CannonL1, 1], [SpearThrowerL1, 1], [AirDefenseL1, 1], [BombTowerL1, 1]]
});

export const DC2Ruin5 = new Ruin({
    structures: [[SuperWizardTowerL1, 1], [InfernoTowerL1, 1], [SmallHut, 2]]
});

export const DC3Ruin1 = new Ruin({
    structures: [[SmallHut, 1], [ThatchedHut, 1]]
});

export const DC3Ruin2 = new Ruin({
    structures: [[MineL1, 1], [ZapTrapL1, 1]]
});

export const DC3Ruin3 = new Ruin({
    structures: [[SuperDragonPostL1, 1], [SmallHut, 1], [ThatchedHut, 1]]
});

export const DC3Ruin4 = new Ruin({
    structures: [[WallL1, 20], [CannonL1, 1], [SpearThrowerL1, 1], [AirDefenseL1, 1], [SuperWizardTowerL1, 1]]
});

export const DC4Ruin1 = new Ruin({
    structures: [[MineL1, 1]]
});

export const DC4Ruin2 = new Ruin({
    structures: [[WallL1, 20], [CannonL1, 1], [SpearThrowerL1, 1], [AirDefenseL1, 1]]
});

export const DC4Ruin3 = new Ruin({
    structures: [[SuperDragonPostL1, 1], [SmallHut, 2]]
});

export const DC5Ruin1 = new Ruin({
    structures: [[MineL1, 1]]
});

export const DC5Ruin2 = new Ruin({
    structures: [[SpearThrowerL1, 1]]
});

export const DC5Ruin3 = new Ruin({
    structures: [[SuperDragonPostL1, 1], [SmallHut, 2]]
});