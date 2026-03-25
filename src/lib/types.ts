export class Structure {
    name: string;
    imageUrl: string;
    cost: number;

    constructor({ name, imageUrl, cost }: { name: string; imageUrl: string; cost: number }) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.cost = cost;
    }
}

export class Decoration extends Structure {
    constructor(params: { name: string; imageUrl: string; cost: number }) {
        super(params);
    }
}

export class DecorationSet {
    name: "Large Forest" | "Campsite";
    decorations: [Decoration, number][];

    constructor({ name, decorations }: {
        name: "Large Forest" | "Campsite";
        decorations: [Decoration, number][];
    }) {
        this.name = name;
        this.decorations = decorations;
    }
}


export class House extends Structure {
    constructor(params: { name: string; imageUrl: string; cost: number }) {
        super(params);
    }
}

export class DefenseBuilding extends Structure {
    level: number;
    capitalHallLevelRequired: number | null;
    districtHallLevelRequired: number;

    constructor({
        name,
        level,
        imageUrl,
        cost,
        capitalHallLevelRequired,
        districtHallLevelRequired,
    }: {
        name: string;
        level: number;
        imageUrl: string;
        cost: number;
        capitalHallLevelRequired: number | null;
        districtHallLevelRequired: number;
    }) {
        super({ name, imageUrl, cost });
        this.level = level;
        this.capitalHallLevelRequired = capitalHallLevelRequired;
        this.districtHallLevelRequired = districtHallLevelRequired;
    }
}

export class Wall extends DefenseBuilding {
    constructor({ level, imageUrl, cost, capitalHallLevelRequired, districtHallLevelRequired }: {
        level: number;
        imageUrl: string;
        cost: number;
        capitalHallLevelRequired: number;
        districtHallLevelRequired: number;
    }) {
        super({ name: "Wall", level, imageUrl, cost, capitalHallLevelRequired, districtHallLevelRequired });
    }
}

export class Trap extends Structure {
    level: number;
    capitalHallLevelRequired: number | null;
    districtHallLevelRequired: number;

    constructor({
        name,
        level,
        imageUrl,
        cost,
        capitalHallLevelRequired,
        districtHallLevelRequired,
    }: {
        name: string;
        level: number;
        imageUrl: string;
        cost: number;
        capitalHallLevelRequired: number | null;
        districtHallLevelRequired: number;
    }) {
        super({ name, imageUrl, cost });
        this.level = level;
        this.capitalHallLevelRequired = capitalHallLevelRequired;
        this.districtHallLevelRequired = districtHallLevelRequired;
    }
}

export class OffenseBuilding extends Structure {
    level: number;
    districtHallLevelRequired: number;

    constructor({
        name,
        level,
        imageUrl,
        cost,
        districtHallLevelRequired,
    }: {
        name: string;
        level: number;
        imageUrl: string;
        cost: number;
        districtHallLevelRequired: number;
    }) {
        super({ name, imageUrl, cost });
        this.level = level;
        this.districtHallLevelRequired = districtHallLevelRequired;
    }
}

export class DistrictHall extends Structure {
    level: number;

    constructor({
        name,
        level,
        imageUrl,
        cost,
    }: {
        name: string;
        level: number;
        imageUrl: string;
        cost: number;
    }) {
        super({ name, imageUrl, cost });
        this.level = level;
    }
}

export class CapitalHall extends Structure {
    level: number;
    noOfUpgradesRequired: number;
    maxNoOfBuildingsAvailable: number;

    constructor({
        name,
        level,
        imageUrl,
        cost,
        noOfUpgradesRequired,
        maxNoOfBuildingsAvailable,
    }: {
        name: string;
        level: number;
        imageUrl: string;
        cost: number;
        noOfUpgradesRequired: number;
        maxNoOfBuildingsAvailable: number;
    }) {
        super({ name, imageUrl, cost });
        this.level = level;
        this.noOfUpgradesRequired = noOfUpgradesRequired;
        this.maxNoOfBuildingsAvailable = maxNoOfBuildingsAvailable;
    }
}

export class Ruin {
    name: "Ruins" | "Barracks Ruins" | "Army Camp Ruins" | "Spell Factory Ruins";
    structures: [Structure, number][];

    constructor({ name = "Ruins", structures }: {
        name?: "Ruins" | "Barracks Ruins" | "Army Camp Ruins" | "Spell Factory Ruins";
        structures: [Structure, number][];
    }) {
        this.name = name;
        this.structures = structures;
    }
}