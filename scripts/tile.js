class Tile {
    position;
    dug = false;
    constructor(position) {
        this.position = position;
    }
    get isDug() {
        return this.dug;
    }
}
export { Tile };
