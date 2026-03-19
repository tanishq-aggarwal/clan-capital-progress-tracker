import { AirBombsL1 } from "$lib/structures/defense/air-bombs";
import { AirDefenseL1 } from "$lib/structures/defense/air-defense";
import { BombTowerL1 } from "$lib/structures/defense/bomb-tower";
import { CannonL1 } from "$lib/structures/defense/cannon";
import { GiantCannonL1 } from "$lib/structures/defense/giant-cannon";
import { HiddenMegaTeslaL1 } from "$lib/structures/defense/hidden-mega-tesla";
import { MinionHiveL1 } from "$lib/structures/defense/minion-hive";
import { MultiCannonL1 } from "$lib/structures/defense/multi-cannon";
import { MultiMortarL1 } from "$lib/structures/defense/multi-mortar";
import { RapidRocketsL1 } from "$lib/structures/defense/rapid-rockets";
import { ReflectorL1 } from "$lib/structures/defense/reflector";
import { RocketArtilleryL1 } from "$lib/structures/defense/rocket-artillery";
import { SpearThrowerL1 } from "$lib/structures/defense/spear-thrower";
import { SuperWizardTowerL1 } from "$lib/structures/defense/super-wizard-tower";
import { WallL1 } from "$lib/structures/defense/wall";
import { SmallCabin, SmallHut, WoodenCabin, WoodenHouse } from "$lib/structures/houses";
import { GraveyardSpellFactoryL1 } from "$lib/structures/offense/graveyard-spell-factory";
import { LogTrapL1 } from "$lib/structures/traps/log-trap";
import { MegaMineL1 } from "$lib/structures/traps/mega-mine";
import { MineL1 } from "$lib/structures/traps/mine";
import { ZapTrapL1 } from "$lib/structures/traps/zap-trap";
import { Ruin } from "$lib/types";

export const SP1Ruin1 = new Ruin({
    structures: [[SmallHut, 1], [MineL1, 1]]
});

export const SP1Ruin2 = new Ruin({
    structures: [[WallL1, 16], [CannonL1, 1], [SpearThrowerL1, 1]]
});

export const SP1Ruin3 = new Ruin({
    structures: [[MultiCannonL1, 1], [WoodenHouse, 1], [LogTrapL1, 1]]
});

export const SP1Ruin4 = new Ruin({
    structures: [[AirDefenseL1, 1], [BombTowerL1, 1], [SmallCabin, 1], [MineL1, 1]]
});

export const SP1Ruin5 = new Ruin({
    structures: [[GiantCannonL1, 1]]
});

export const SP1Ruin6 = new Ruin({
    structures: [[WallL1, 20], [AirDefenseL1, 1], [SuperWizardTowerL1, 1], [SmallHut, 1]]
});

export const SP1Ruin7 = new Ruin({
    structures: [[HiddenMegaTeslaL1, 1], [WoodenHouse, 1], [MineL1, 1], [MegaMineL1, 1]]
});

export const SP1Ruin8 = new Ruin({
    structures: [[CannonL1, 1], [BombTowerL1, 1], [RapidRocketsL1, 1], [MineL1, 1]]
});

export const SP1Ruin9 = new Ruin({
    structures: [[ReflectorL1, 2], [LogTrapL1, 1]]
});

export const SP1Ruin10 = new Ruin({
    structures: [[WallL1, 20], [CannonL1, 1], [AirDefenseL1, 1], [MultiMortarL1, 1], [SuperWizardTowerL1, 1]]
});

export const SP2Ruin1 = new Ruin({
    structures: [[MultiCannonL1, 1], [MegaMineL1, 1]]
});

export const SP2Ruin2 = new Ruin({
    structures: [[ReflectorL1, 1], [LogTrapL1, 1]]
});

export const SP2Ruin3 = new Ruin({
    structures: [[SpearThrowerL1, 1], [AirBombsL1, 1], [MineL1, 1]]
});

export const SP2Ruin4 = new Ruin({
    structures: [[MinionHiveL1, 1]]
});

export const SP2Ruin5 = new Ruin({
    name: "Spell Factory Ruins",
    structures: [[WoodenHouse, 1], [WoodenCabin, 1], [GraveyardSpellFactoryL1, 1]]
});

export const SP2Ruin6 = new Ruin({
    structures: [[BombTowerL1, 1], [MultiMortarL1, 1], [RapidRocketsL1, 1], [HiddenMegaTeslaL1, 1], [LogTrapL1, 1]]
});

export const SP3Ruin1 = new Ruin({
    structures: [[AirDefenseL1, 1], [SmallHut, 1], [MineL1, 1], [ZapTrapL1, 1]]
});

export const SP3Ruin2 = new Ruin({
    structures: [[SpearThrowerL1, 1], [AirBombsL1, 1], [WoodenHouse, 1]]
});

export const SP3Ruin3 = new Ruin({
    structures: [[RocketArtilleryL1, 1]]
});

export const SP3Ruin4 = new Ruin({
    structures: [[SpearThrowerL1, 1], [MultiMortarL1, 1], [RapidRocketsL1, 1], [ZapTrapL1, 1]]
});

export const SP3Ruin5 = new Ruin({
    structures: [[ReflectorL1, 2], [LogTrapL1, 1]]
});

export const SP4Ruin1 = new Ruin({
    structures: [[WallL1, 20], [AirDefenseL1, 1], [MultiCannonL1, 1], [SmallCabin, 1]]
});

export const SP4Ruin2 = new Ruin({
    structures: [[RocketArtilleryL1, 1], [ZapTrapL1, 1]]
});

export const SP4Ruin3 = new Ruin({
    structures: [[CannonL1, 1], [SpearThrowerL1, 1], [AirDefenseL1, 1], [ReflectorL1, 1]]
});