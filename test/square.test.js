const Square = require('../lib/Square.js');

describe('Square', () => {
    it("Test for square shape that should display right color", () => {
        const shape = new Square();
        shape.setColor("purple");
        expect(shape.render()).toEqual(`<rect x="50" y="50" width="150" height="150" fill="purple" />`);
    })
})
