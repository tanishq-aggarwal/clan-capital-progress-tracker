import type { Ruin } from "./types";
import * as CPRuins from "./ruins/capital-peak";
import * as BCRuins from "./ruins/barbarian-camp";
import * as WVRuins from "./ruins/wizard-valley";
import * as BLRuins from "./ruins/balloon-lagoon";
import * as BWRuins from "./ruins/builders-workshop";
import * as DCRuins from "./ruins/dragon-cliffs";
import * as GQRuins from "./ruins/golem-quarry";
import * as SPRuins from "./ruins/skeleton-park";
import * as GMRuins from "./ruins/goblin-mines";

export const CapitalPeak: {
    name: string;
    nextLevelUnlocksAtNoOfUpgrades: {
        [key: number]: number;
    };
    ruinsUnlockedAtEachLevel: {
        [key: number]: Ruin[];
    };
} = {
    name: "Capital Peak",
    nextLevelUnlocksAtNoOfUpgrades: {
        1: 0,
        2: 15,
        3: 65,
        4: 165,
        5: 285,
        6: 480,
        7: 670,
        8: 1_090,
        9: 1_500,
        10: 2_000,
    },
    ruinsUnlockedAtEachLevel: {
        1: [CPRuins.CP1Ruin1, CPRuins.CP1Ruin2],
        2: [CPRuins.CP2Ruin1, CPRuins.CP2Ruin2, CPRuins.CP2Ruin3, CPRuins.CP2Ruin4],
        3: [CPRuins.CP3Ruin1, CPRuins.CP3Ruin2, CPRuins.CP3Ruin3],
        4: [CPRuins.CP4Ruin1, CPRuins.CP4Ruin2, CPRuins.CP4Ruin3, CPRuins.CP4Ruin4],
        5: [CPRuins.CP5Ruin1, CPRuins.CP5Ruin2, CPRuins.CP5Ruin3, CPRuins.CP5Ruin4],
        6: [CPRuins.CP6Ruin1, CPRuins.CP6Ruin2, CPRuins.CP6Ruin3, CPRuins.CP6Ruin4],
        7: [CPRuins.CP7Ruin1, CPRuins.CP7Ruin2, CPRuins.CP7Ruin3],
        8: [CPRuins.CP8Ruin1, CPRuins.CP8Ruin2, CPRuins.CP8Ruin3],
        9: [CPRuins.CP9Ruin1, CPRuins.CP9Ruin2, CPRuins.CP9Ruin3],
        10: [CPRuins.CP10Ruin1, CPRuins.CP10Ruin2, CPRuins.CP10Ruin3],
    }
};


export class District {
    name: string;
    nextLevelUnlocksAtChLevel: {
        [key: number]: number;
    };
    ruinsUnlockedAtEachLevel: {
        [key: number]: Ruin[];
    };

    constructor({ name, nextLevelUnlocksAtChLevel, ruinsUnlockedAtEachLevel }: {
        name: string;
        nextLevelUnlocksAtChLevel: {
            [key: number]: number;
        };
        ruinsUnlockedAtEachLevel: {
            [key: number]: Ruin[];
        };
    }) {
        this.name = name;
        this.nextLevelUnlocksAtChLevel = nextLevelUnlocksAtChLevel;
        this.ruinsUnlockedAtEachLevel = ruinsUnlockedAtEachLevel;
    }
}

export const BarbarianCamp = new District({
    name: "Barbarian Camp",
    nextLevelUnlocksAtChLevel: {
        1: 2,
        2: 3,
        3: 5,
        4: 7,
        5: 9,
    },
    ruinsUnlockedAtEachLevel: {
        1: [BCRuins.BC1Ruin1, BCRuins.BC1Ruin2, BCRuins.BC1Ruin3, BCRuins.BC1Ruin4, BCRuins.BC1Ruin5],
        2: [BCRuins.BC2Ruin1, BCRuins.BC2Ruin2, BCRuins.BC2Ruin3, BCRuins.BC2Ruin4, BCRuins.BC2Ruin5],
        3: [BCRuins.BC3Ruin1, BCRuins.BC3Ruin2, BCRuins.BC3Ruin3, BCRuins.BC3Ruin4, BCRuins.BC3Ruin5, BCRuins.BC3Ruin6],
        4: [BCRuins.BC4Ruin1, BCRuins.BC4Ruin2, BCRuins.BC4Ruin3, BCRuins.BC4Ruin4, BCRuins.BC4Ruin5],
        5: [BCRuins.BC5Ruin1, BCRuins.BC5Ruin2, BCRuins.BC5Ruin3],
    }
});

export const WizardValley = new District({
    name: "Wizard Valley",
    nextLevelUnlocksAtChLevel: {
        1: 3,
        2: 4,
        3: 6,
        4: 8,
        5: 10,
    },
    ruinsUnlockedAtEachLevel: {
        1: [WVRuins.WV1Ruin1, WVRuins.WV1Ruin2, WVRuins.WV1Ruin3, WVRuins.WV1Ruin4, WVRuins.WV1Ruin5, WVRuins.WV1Ruin6],
        2: [WVRuins.WV2Ruin1, WVRuins.WV2Ruin2, WVRuins.WV2Ruin3, WVRuins.WV2Ruin4, WVRuins.WV2Ruin5],
        3: [WVRuins.WV3Ruin1, WVRuins.WV3Ruin2, WVRuins.WV3Ruin3, WVRuins.WV3Ruin4, WVRuins.WV3Ruin5],
        4: [WVRuins.WV4Ruin1, WVRuins.WV4Ruin2, WVRuins.WV4Ruin3, WVRuins.WV4Ruin4],
        5: [WVRuins.WV5Ruin1, WVRuins.WV5Ruin2],
    }
});

export const BalloonLagoon = new District({
    name: "Balloon Lagoon",
    nextLevelUnlocksAtChLevel: {
        1: 4,
        2: 5,
        3: 7,
        4: 8,
        5: 10,
    },
    ruinsUnlockedAtEachLevel: {
        1: [BLRuins.BL1Ruin1, BLRuins.BL1Ruin2, BLRuins.BL1Ruin3, BLRuins.BL1Ruin4, BLRuins.BL1Ruin5, BLRuins.BL1Ruin6],
        2: [BLRuins.BL2Ruin1, BLRuins.BL2Ruin2, BLRuins.BL2Ruin3, BLRuins.BL2Ruin4, BLRuins.BL2Ruin5, BLRuins.BL2Ruin6],
        3: [BLRuins.BL3Ruin1, BLRuins.BL3Ruin2, BLRuins.BL3Ruin3, BLRuins.BL3Ruin4, BLRuins.BL3Ruin5],
        4: [BLRuins.BL4Ruin1, BLRuins.BL4Ruin2, BLRuins.BL4Ruin3, BLRuins.BL4Ruin4],
        5: [BLRuins.BL5Ruin1, BLRuins.BL5Ruin2, BLRuins.BL5Ruin3],
    }
});

export const BuildersWorkshop = new District({
    name: "Builder's Workshop",
    nextLevelUnlocksAtChLevel: {
        1: 5,
        2: 6,
        3: 7,
        4: 9,
        5: 10,
    },
    ruinsUnlockedAtEachLevel: {
        1: [BWRuins.BW1Ruin1, BWRuins.BW1Ruin2, BWRuins.BW1Ruin3, BWRuins.BW1Ruin4, BWRuins.BW1Ruin5],
        2: [BWRuins.BW2Ruin1, BWRuins.BW2Ruin2, BWRuins.BW2Ruin3, BWRuins.BW2Ruin4, BWRuins.BW2Ruin5],
        3: [BWRuins.BW3Ruin1, BWRuins.BW3Ruin2, BWRuins.BW3Ruin3, BWRuins.BW3Ruin4],
        4: [BWRuins.BW4Ruin1, BWRuins.BW4Ruin2, BWRuins.BW4Ruin3],
        5: [BWRuins.BW5Ruin1, BWRuins.BW5Ruin2, BWRuins.BW5Ruin3],
    }
});

export const DragonCliffs = new District({
    name: "Dragon Cliffs",
    nextLevelUnlocksAtChLevel: {
        1: 6,
        2: 7,
        3: 8,
        4: 9,
        5: 10,
    },
    ruinsUnlockedAtEachLevel: {
        1: [DCRuins.DC1Ruin1, DCRuins.DC1Ruin2, DCRuins.DC1Ruin3, DCRuins.DC1Ruin4, DCRuins.DC1Ruin5, DCRuins.DC1Ruin6],
        2: [DCRuins.DC2Ruin1, DCRuins.DC2Ruin2, DCRuins.DC2Ruin3, DCRuins.DC2Ruin4, DCRuins.DC2Ruin5],
        3: [DCRuins.DC3Ruin1, DCRuins.DC3Ruin2, DCRuins.DC3Ruin3, DCRuins.DC3Ruin4],
        4: [DCRuins.DC4Ruin1, DCRuins.DC4Ruin2, DCRuins.DC4Ruin3],
        5: [DCRuins.DC5Ruin1, DCRuins.DC5Ruin2, DCRuins.DC5Ruin3],
    }
});

export const GolemQuarry = new District({
    name: "Golem Quarry",
    nextLevelUnlocksAtChLevel: {
        1: 7,
        2: 7,
        3: 8,
        4: 9,
        5: 10,
    },
    ruinsUnlockedAtEachLevel: {
        1: [GQRuins.GQ1Ruin1, GQRuins.GQ1Ruin2, GQRuins.GQ1Ruin3, GQRuins.GQ1Ruin4, GQRuins.GQ1Ruin5, GQRuins.GQ1Ruin6, GQRuins.GQ1Ruin7],
        2: [GQRuins.GQ2Ruin1, GQRuins.GQ2Ruin2, GQRuins.GQ2Ruin3, GQRuins.GQ2Ruin4, GQRuins.GQ2Ruin5, GQRuins.GQ2Ruin6],
        3: [GQRuins.GQ3Ruin1, GQRuins.GQ3Ruin2, GQRuins.GQ3Ruin3, GQRuins.GQ3Ruin4],
        4: [GQRuins.GQ4Ruin1, GQRuins.GQ4Ruin2, GQRuins.GQ4Ruin3],
        5: [GQRuins.GQ5Ruin1, GQRuins.GQ5Ruin2],
    }
});

export const SkeletonPark = new District({
    name: "Skeleton Park",
    nextLevelUnlocksAtChLevel: {
        1: 8,
        2: 8,
        3: 9,
        4: 10,
    },
    ruinsUnlockedAtEachLevel: {
        1: [SPRuins.SP1Ruin1, SPRuins.SP1Ruin2, SPRuins.SP1Ruin3, SPRuins.SP1Ruin4, SPRuins.SP1Ruin5, SPRuins.SP1Ruin6, SPRuins.SP1Ruin7, SPRuins.SP1Ruin8, SPRuins.SP1Ruin9, SPRuins.SP1Ruin10],
        2: [SPRuins.SP2Ruin1, SPRuins.SP2Ruin2, SPRuins.SP2Ruin3, SPRuins.SP2Ruin4, SPRuins.SP2Ruin5, SPRuins.SP2Ruin6],
        3: [SPRuins.SP3Ruin1, SPRuins.SP3Ruin2, SPRuins.SP3Ruin3, SPRuins.SP3Ruin4, SPRuins.SP3Ruin5],
        4: [SPRuins.SP4Ruin1, SPRuins.SP4Ruin2, SPRuins.SP4Ruin3],
    }
});

export const GoblinMines = new District({
    name: "Goblin Mines",
    nextLevelUnlocksAtChLevel: {
        1: 9,
        2: 9,
        3: 10,
        4: 10,
    },
    ruinsUnlockedAtEachLevel: {
        1: [GMRuins.GM1Ruin1, GMRuins.GM1Ruin2, GMRuins.GM1Ruin3, GMRuins.GM1Ruin4, GMRuins.GM1Ruin5, GMRuins.GM1Ruin6, GMRuins.GM1Ruin7, GMRuins.GM1Ruin8, GMRuins.GM1Ruin9, GMRuins.GM1Ruin10, GMRuins.GM1Ruin11],
        2: [GMRuins.GM2Ruin1, GMRuins.GM2Ruin2, GMRuins.GM2Ruin3, GMRuins.GM2Ruin4, GMRuins.GM2Ruin5, GMRuins.GM2Ruin6, GMRuins.GM2Ruin7, GMRuins.GM2Ruin8],
        3: [GMRuins.GM3Ruin1, GMRuins.GM3Ruin2, GMRuins.GM3Ruin3, GMRuins.GM3Ruin4, GMRuins.GM3Ruin5, GMRuins.GM3Ruin6],
        4: [GMRuins.GM4Ruin1, GMRuins.GM4Ruin2, GMRuins.GM4Ruin3, GMRuins.GM4Ruin4, GMRuins.GM4Ruin5, GMRuins.GM4Ruin6],
    }
});
