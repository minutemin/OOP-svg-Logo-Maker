// require constructor class Shape js file
const Shape = require('./Shape');
// create class for Triangle that extends Shape
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
      };
};
// Export the Shape module
module.exports = Triangle;