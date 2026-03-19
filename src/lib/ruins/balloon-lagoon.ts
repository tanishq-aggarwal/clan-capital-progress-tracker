import { Grove2, Tree2_1, Tree2_2, Tree2_3 } from "$lib/structures/decorations";
import { AirBombsL1 } from "$lib/structures/defense/air-bombs";
import { AirDefenseL1 } from "$lib/structures/defense/air-defense";
import { CannonL1 } from "$lib/structures/defense/cannon";
import { CrusherL1 } from "$lib/structures/defense/crusher";
import { HiddenMegaTeslaL1 } from "$lib/structures/defense/hidden-mega-tesla";
import { InfernoTowerL1 } from "$lib/structures/defense/inferno-tower";
import { MultiCannonL1 } from "$lib/structures/defense/multi-cannon";
import { RapidRocketsL1 } from "$lib/structures/defense/rapid-rockets";
import { RocketArtilleryL1 } from "$lib/structures/defense/rocket-artillery";
import { SpearThrowerL1 } from "$lib/structures/defense/spear-thrower";
import { WallL1 } from "$lib/structures/defense/wall";
import { SmallCabin, WoodenCabin } from "$lib/structures/houses";
import { FlyingFortressYardL1 } from "$lib/structures/offense/flying-fortress-yard";
import { LightningSpellFactoryL1 } from "$lib/structures/offense/lightning-spell-factory";
import { SkeletonBarrelBarracksL1 } from "$lib/structures/offense/skeleton-barrel-barracks";
import { MegaMineL1 } from "$lib/structures/traps/mega-mine";
import { MineL1 } from "$lib/structures/traps/mine";
import { Ruin } from "$lib/types";

export const BL1Ruin1 = new Ruin({
    structures: [[MineL1, 3], [Tree2_2, 1], [Tree2_3, 2]]
});

export const BL1Ruin2 = new Ruin({
    name: "Barracks Ruins",
    structures: [[SkeletonBarrelBarracksL1, 1]]
});

export const BL1Ruin3 = new Ruin({
    structures: [[WallL1, 20], [CannonL1, 1], [SpearThrowerL1, 1], [AirDefenseL1, 1]]
});

export const BL1Ruin4 = new Ruin({
    structures: [[SpearThrowerL1, 2], [HiddenMegaTeslaL1, 1], [Tree2_2, 1]]
});

export const BL1Ruin5 = new Ruin({
    structures: [[CannonL1, 2], [AirBombsL1, 1], [CrusherL1, 1], [Tree2_2, 1]]
});

export const BL1Ruin6 = new Ruin({
    structures: [[SpearThrowerL1, 1], [MultiCannonL1, 2], [RapidRocketsL1, 1], [Tree2_2, 1], [Tree2_1, 1], [Tree2_3, 1], [Grove2, 1]]
});

export const BL2Ruin1 = new Ruin({
    structures: [[MineL1, 2]]
});

export const BL2Ruin2 = new Ruin({
    name: "Spell Factory Ruins",
    structures: [[LightningSpellFactoryL1, 1], [Tree2_2, 1], [Grove2, 1]]
});

export const BL2Ruin3 = new Ruin({
    structures: [[CannonL1, 2], [SpearThrowerL1, 2], [SmallCabin, 2], [Tree2_1, 1], [Tree2_3, 1]]
});

export const BL2Ruin4 = new Ruin({
    structures: [[RocketArtilleryL1, 1]]
});

export const BL2Ruin5 = new Ruin({
    structures: [[CannonL1, 2], [RocketArtilleryL1, 1], [Tree2_3, 1]]
});

export const BL2Ruin6 = new Ruin({
    name: "Barracks Ruins",
    structures: [[WallL1, 20], [FlyingFortressYardL1, 1]]
});

export const BL3Ruin1 = new Ruin({
    structures: [[MineL1, 1], [MegaMineL1, 1], [Tree2_3, 1]]
});

export const BL3Ruin2 = new Ruin({
    structures: [[SpearThrowerL1, 2], [SmallCabin, 2], [Tree2_2, 1]]
});

export const BL3Ruin3 = new Ruin({
    structures: [[WallL1, 20], [CannonL1, 2], [AirDefenseL1, 1], [Tree2_1, 1]]
});

export const BL3Ruin4 = new Ruin({
    structures: [[InfernoTowerL1, 1], [Tree2_2, 1], [Tree2_1, 1], [Tree2_3, 1]]
});

export const BL3Ruin5 = new Ruin({
    structures: [[InfernoTowerL1, 1], [Grove2, 1]]
});

export const BL4Ruin1 = new Ruin({
    structures: [[SmallCabin, 1]]
});

export const BL4Ruin2 = new Ruin({
    structures: [[MineL1, 1], [MegaMineL1, 1]]
});

export const BL4Ruin3 = new Ruin({
    structures: [[CannonL1, 1], [SpearThrowerL1, 1], [AirBombsL1, 1]]
});

export const BL4Ruin4 = new Ruin({
    structures: [[WallL1, 20], [RocketArtilleryL1, 1], [SmallCabin, 1], [Tree2_2, 1]]
});

export const BL5Ruin1 = new Ruin({
    structures: [[MegaMineL1, 1]]
});

export const BL5Ruin2 = new Ruin({
    structures: [[AirBombsL1, 1], [WoodenCabin, 1]]
});

export const BL5Ruin3 = new Ruin({
    structures: [[CannonL1, 1], [SpearThrowerL1, 1], [RocketArtilleryL1, 1]]
});