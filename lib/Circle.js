// require constructor class Shape js file
const Shape = require('./Shape');
// create class for Circle that extends Shape
class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}
// Export the Shape module
module.exports = Circle;