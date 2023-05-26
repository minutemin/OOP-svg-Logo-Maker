// require Triangle js file
const Triangle = require('../lib/Triangle');

// run test code for Triangle js file
describe('Triangle', () => {
    test('should have the right color', () => {
        const shape = new Triangle();
        shape.setColor("red");
        expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="red" />`);
    });
  });