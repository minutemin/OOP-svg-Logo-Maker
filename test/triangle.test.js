const Triangle = require('../lib/Triangle');

// const shape = new Triangle();
// const theShape = shape.render();
// shape.setColor("blue");
// expect(theShape).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

describe('Triangle', () => {
    test('should have the right color', () => {
        const shape = new Triangle();
        const theShape = shape.render();
        shape.setColor("blue");
        expect(theShape).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
  });