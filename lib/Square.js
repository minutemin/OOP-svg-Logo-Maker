// require constructor class Shape js file
const Shape = require('./Shape');
// create class for Square that extends Shape
class Square extends Shape {
    render() {
      return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`
    }
}
// Export the Shape module
module.exports = Square;



