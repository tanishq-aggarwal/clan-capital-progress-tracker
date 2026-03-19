import { Grove2, Tree2_1, Tree2_2, Tree2_3 } from "$lib/structures/decorations";
import { AirBombsL1 } from "$lib/structures/defense/air-bombs";
import { AirDefenseL1 } from "$lib/structures/defense/air-defense";
import { CannonL1 } from "$lib/structures/defense/cannon";
import { GiantCannonL1 } from "$lib/structures/defense/giant-cannon";
import { HiddenMegaTeslaL1 } from "$lib/structures/defense/hidden-mega-tesla";
import { InfernoTowerL1 } from "$lib/structures/defense/inferno-tower";
import { MultiCannonL1 } from "$lib/structures/defense/multi-cannon";
import { RaidCartPostL1 } from "$lib/structures/defense/raid-cart-post";
import { SpearThrowerL1 } from "$lib/structures/defense/spear-thrower";
import { SuperWizardTowerL1 } from "$lib/structures/defense/super-wizard-tower";
import { WallL1 } from "$lib/structures/defense/wall";
import { SmallHut, WoodenHouse } from "$lib/structures/houses";
import { ArmyCampL1 } from "$lib/structures/offense/army-camp";
import { JumpSpellFactoryL1 } from "$lib/structures/offense/jump-spell-factory";
import { SuperWizardBarracksL1 } from "$lib/structures/offense/super-wizard-barracks";
import { LogTrapL1 } from "$lib/structures/traps/log-trap";
import { MegaMineL1 } from "$lib/structures/traps/mega-mine";
import { MineL1 } from "$lib/structures/traps/mine";
import { Ruin } from "$lib/types";

export const WV1Ruin1 = new Ruin({
    structures: [[MineL1, 2], [MegaMineL1, 1]]
});

export const WV1Ruin2 = new Ruin({
    structures: [[CannonL1, 1], [SpearThrowerL1, 1]]
});

export const WV1Ruin3 = new Ruin({
    name: "Barracks Ruins",
    structures: [[SuperWizardBarracksL1, 1]]
});

export const WV1Ruin4 = new Ruin({
    structures: [[SpearThrowerL1, 3], [AirDefenseL1, 1], [Tree2_2, 1]]
});

export const WV1Ruin5 = new Ruin({
    structures: [[WallL1, 22], [SuperWizardTowerL1, 1], [RaidCartPostL1, 1], [Tree2_3, 1], [Grove2, 1]]
});

export const WV1Ruin6 = new Ruin({
    structures: [[WallL1, 24], [MultiCannonL1, 1], [SuperWizardTowerL1, 2], [AirBombsL1, 1], [Tree2_2, 1]]
});

export const WV2Ruin1 = new Ruin({
    structures: [[MegaMineL1, 2], [LogTrapL1, 1]]
});

export const WV2Ruin2 = new Ruin({
    structures: [[WallL1, 20], [CannonL1, 1], [SpearThrowerL1, 1], [AirDefenseL1, 1], [Tree2_1, 1]]
});

export const WV2Ruin3 = new Ruin({
    name: "Army Camp Ruins",
    structures: [[ArmyCampL1, 1]]
});

export const WV2Ruin4 = new Ruin({
    name: "Spell Factory Ruins",
    structures: [[WallL1, 20], [JumpSpellFactoryL1, 1], [SmallHut, 1]]
});

export const WV2Ruin5 = new Ruin({
    structures: [[MultiCannonL1, 1], [AirBombsL1, 1], [HiddenMegaTeslaL1, 2]]
});

export const WV3Ruin1 = new Ruin({
    structures: [[MineL1, 1], [MegaMineL1, 1]]
});

export const WV3Ruin2 = new Ruin({
    structures: [[WallL1, 20], [AirBombsL1, 1], [SmallHut, 2], [Tree2_3, 1]]
});

export const WV3Ruin3 = new Ruin({
    structures: [[AirDefenseL1, 1], [SuperWizardTowerL1, 1], [WoodenHouse, 1]]
});

export const WV3Ruin4 = new Ruin({
    structures: [[InfernoTowerL1, 1]]
});

export const WV3Ruin5 = new Ruin({
    structures: [[CannonL1, 1], [SpearThrowerL1, 1], [InfernoTowerL1, 1]]
});

export const WV4Ruin1 = new Ruin({
    structures: [[MineL1, 1], [MegaMineL1, 1]]
});

export const WV4Ruin2 = new Ruin({
    structures: [[SuperWizardTowerL1, 1], [WoodenHouse, 1]]
});

export const WV4Ruin3 = new Ruin({
    structures: [[WallL1, 20], [AirDefenseL1, 1], [GiantCannonL1, 1], [Tree2_1, 1]]
});

export const WV4Ruin4 = new Ruin({
    structures: [[CannonL1, 1], [SpearThrowerL1, 1], [GiantCannonL1, 1], [WoodenHouse, 1]]
});

export const WV5Ruin1 = new Ruin({
    structures: [[RaidCartPostL1, 1], [WoodenHouse, 1]]
});

export const WV5Ruin2 = new Ruin({
    structures: [[WallL1, 20], [InfernoTowerL1, 1], [Tree2_2, 1]]
});