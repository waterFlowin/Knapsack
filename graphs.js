function alloc2dArray(height, width) {
    let b = new Array(width).fill(0);
    let a = new Array(height).fill(b);
}

Class Graph {
    constructor(size) {
        this.matrix = alloc2dArray(size, size);
    }
}