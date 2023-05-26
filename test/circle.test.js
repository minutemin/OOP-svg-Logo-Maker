const Circle = require('../lib/Circle.js');

describe('Circle', () => {
    test('Tests for a circle that should have the right color', () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="blue" />`);
    });
});
