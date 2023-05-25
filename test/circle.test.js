const Circle = require('../lib/Circle.js');

const shape = new Circle();
shape.setColor("blue");
expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');