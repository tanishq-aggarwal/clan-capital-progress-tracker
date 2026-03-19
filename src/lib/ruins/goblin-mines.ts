import { Bonfire } from "$lib/structures/decorations";
import { AirBombsL1 } from "$lib/structures/defense/air-bombs";
import { AirDefenseL1 } from "$lib/structures/defense/air-defense";
import { BlastBowL1 } from "$lib/structures/defense/blast-bow";
import { BombTowerL1 } from "$lib/structures/defense/bomb-tower";
import { CannonL1 } from "$lib/structures/defense/cannon";
import { CrusherL1 } from "$lib/structures/defense/crusher";
import { GiantCannonL1 } from "$lib/structures/defense/giant-cannon";
import { GoblinThrowerL1 } from "$lib/structures/defense/goblin-thrower";
import { HiddenMegaTeslaL1 } from "$lib/structures/defense/hidden-mega-tesla";
import { InfernoTowerL1 } from "$lib/structures/defense/inferno-tower";
import { MinionHiveL1 } from "$lib/structures/defense/minion-hive";
import { MultiCannonL1 } from "$lib/structures/defense/multi-cannon";
import { MultiMortarL1 } from "$lib/structures/defense/multi-mortar";
import { RapidRocketsL1 } from "$lib/structures/defense/rapid-rockets";
import { ReflectorL1 } from "$lib/structures/defense/reflector";
import { SpearThrowerL1 } from "$lib/structures/defense/spear-thrower";
import { SuperWizardTowerL1 } from "$lib/structures/defense/super-wizard-tower";
import { WallL1 } from "$lib/structures/defense/wall";
import { GoblinHall, GoblinHut, GoblinOutpost } from "$lib/structures/houses";
import { HasteSpellFactoryL1 } from "$lib/structures/offense/haste-spell-factory";
import { MegaSparkyWorkshopL1 } from "$lib/structures/offense/mega-sparky-workshop";
import { SuperMinerBarracksL1 } from "$lib/structures/offense/super-miner-barracks";
import { LogTrapL1 } from "$lib/structures/traps/log-trap";
import { MegaMineL1 } from "$lib/structures/traps/mega-mine";
import { MineL1 } from "$lib/structures/traps/mine";
import { SpearTrapL1 } from "$lib/structures/traps/spear-trap";
import { ZapTrapL1 } from "$lib/structures/traps/zap-trap";
import { Ruin } from "$lib/types";

export const GM1Ruin1 = new Ruin({
    structures: [[GoblinOutpost, 1], [GoblinHut, 2], [Bonfire, 1]]
});

export const GM1Ruin2 = new Ruin({
    structures: [[MineL1, 1], [GoblinHall, 1]]
});

export const GM1Ruin3 = new Ruin({
    structures: [[MineL1, 1], [GoblinHut, 2]]
});

export const GM1Ruin4 = new Ruin({
    structures: [[MegaMineL1, 1], [GoblinOutpost, 1], [Bonfire, 1]]
});

export const GM1Ruin5 = new Ruin({
    structures: [[SpearThrowerL1, 1], [MineL1, 1], [GoblinHut, 1]]
});

export const GM1Ruin6 = new Ruin({
    structures: [[SpearThrowerL1, 1], [LogTrapL1, 1], [GoblinOutpost, 2]]
});

export const GM1Ruin7 = new Ruin({
    structures: [[AirBombsL1, 1], [MultiCannonL1, 1]]
});

export const GM1Ruin8 = new Ruin({
    structures: [[MultiMortarL1, 1], [AirDefenseL1, 1], [SpearTrapL1, 1], [GoblinOutpost, 2], [GoblinHut, 1], [Bonfire, 1]]
});

export const GM1Ruin9 = new Ruin({
    structures: [[GoblinThrowerL1, 1]]
});

export const GM1Ruin10 = new Ruin({
    name: "Barracks Ruins",
    structures: [[SuperMinerBarracksL1, 1]]
});

export const GM1Ruin11 = new Ruin({
    structures: [[GoblinThrowerL1, 1], [RapidRocketsL1, 1], [SpearTrapL1, 1]]
});

export const GM2Ruin1 = new Ruin({
    structures: [[CannonL1, 2], [WallL1, 16]]
});

export const GM2Ruin2 = new Ruin({
    structures: [[SpearTrapL1, 1], [MegaMineL1, 1]]
});

export const GM2Ruin3 = new Ruin({
    structures: [[WallL1, 14], [MultiMortarL1, 1], [ZapTrapL1, 1]]
});

export const GM2Ruin4 = new Ruin({
    structures: [[GiantCannonL1, 1], [SuperWizardTowerL1, 1]]
});

export const GM2Ruin5 = new Ruin({
    structures: [[ReflectorL1, 1], [RapidRocketsL1, 2]]
});

export const GM2Ruin6 = new Ruin({
    structures: [[HiddenMegaTeslaL1, 1], [CrusherL1, 1], [AirBombsL1, 1], [SpearThrowerL1, 1]]
});

export const GM2Ruin7 = new Ruin({
    name: "Spell Factory Ruins",
    structures: [[HasteSpellFactoryL1, 1]]
});

export const GM2Ruin8 = new Ruin({
    name: "Barracks Ruins",
    structures: [[MegaSparkyWorkshopL1, 1]]
});

export const GM3Ruin1 = new Ruin({
    structures: [[GoblinThrowerL1, 1]]
});

export const GM3Ruin2 = new Ruin({
    structures: [[CannonL1, 2], [RapidRocketsL1, 2]]
});

export const GM3Ruin3 = new Ruin({
    structures: [[MultiMortarL1, 1], [CrusherL1, 1], [ReflectorL1, 1]]
});

export const GM3Ruin4 = new Ruin({
    structures: [[InfernoTowerL1, 1], [MegaMineL1, 1]]
});

export const GM3Ruin5 = new Ruin({
    structures: [[SuperWizardTowerL1, 1], [BombTowerL1, 1], [AirDefenseL1, 1], [SpearThrowerL1, 1]]
});

export const GM3Ruin6 = new Ruin({
    structures: [[WallL1, 20], [MinionHiveL1, 1], [SpearTrapL1, 1], [ZapTrapL1, 1]]
});

export const GM4Ruin1 = new Ruin({
    structures: [[CannonL1, 2]]
});

export const GM4Ruin2 = new Ruin({
    structures: [[SpearTrapL1, 1], [LogTrapL1, 1], [MineL1, 1]]
});

export const GM4Ruin3 = new Ruin({
    structures: [[MultiMortarL1, 1], [RapidRocketsL1, 1]]
});

export const GM4Ruin4 = new Ruin({
    structures: [[SpearThrowerL1, 1], [HiddenMegaTeslaL1, 1], [ReflectorL1, 1]]
});

export const GM4Ruin5 = new Ruin({
    structures: [[RapidRocketsL1, 1], [HiddenMegaTeslaL1, 1], [ReflectorL1, 1]]
});

export const GM4Ruin6 = new Ruin({
    structures: [[BlastBowL1, 1], [WallL1, 20]]
});