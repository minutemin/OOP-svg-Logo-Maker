const Square = require('../lib/Square.js');

describe('Triangle', () => {
    it("should display right color", () => {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect x="50" y="50" width="150" height="150" fill="blue" />');
    })
})
