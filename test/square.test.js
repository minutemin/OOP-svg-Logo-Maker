const Square = require('../lib/Square.js');

describe('Square', () => {
    it("Test for square shape that should display right color", () => {
        const shape = new Square();
        shape.setColor("purple");
        expect(shape.render()).toEqual(`<rect x="90" y="40" width="120" height="120" fill="purple" />`);
    })
})
