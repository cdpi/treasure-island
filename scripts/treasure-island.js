import { create as createPirate } from "./pirate.js";
import { create as createTreasure } from "./treasure.js";
import { create as createIsland } from "./island.js";
class TreasureIsland {
    constructor() {
        createPirate();
        createTreasure();
        createIsland();
    }
}
export { TreasureIsland };
