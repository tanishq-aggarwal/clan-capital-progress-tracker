import { Wall } from "../../types";

export const WallL1 = new Wall({
    level: 1,
    imageUrl: "https://static.wikia.nocookie.net/clashofclans/images/d/d2/Wall1C.png",
    cost: 0,
    capitalHallLevelRequired: 1,
    districtHallLevelRequired: 1,
});

export const WallL2 = new Wall({
    level: 2,
    imageUrl: "https://static.wikia.nocookie.net/clashofclans/images/6/6c/Wall2C.png",
    cost: 500,
    capitalHallLevelRequired: 3,
    districtHallLevelRequired: 2,
});

export const WallL3 = new Wall({
    level: 3,
    imageUrl: "https://static.wikia.nocookie.net/clashofclans/images/3/3e/Wall3C.png",
    cost: 1_500,
    capitalHallLevelRequired: 5,
    districtHallLevelRequired: 3,
});

export const WallL4 = new Wall({
    level: 4,
    imageUrl: "https://static.wikia.nocookie.net/clashofclans/images/a/a3/Wall4C.png",
    cost: 3_500,
    capitalHallLevelRequired: 7,
    districtHallLevelRequired: 4,
});

export const WallL5 = new Wall({
    level: 5,
    imageUrl: "https://static.wikia.nocookie.net/clashofclans/images/f/f9/Wall5C.png",
    cost: 6_000,
    capitalHallLevelRequired: 9,
    districtHallLevelRequired: 5,
});