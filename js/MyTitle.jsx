const React = require('react')
const div = React.DOM.div
const h1 = React.DOM.h1

// make a new class
const MyTitle = React.createClass({
  // ES6 syntax for defining a function
  // each component needs a render function
  render () {
    const style = {color: this.props.color}
    // must return a component
    return (
      // can only return one thing - nested is fine though
      <div>
        <h1 style={ style }>
           {this.props.title}
        </h1>
      </div>
    )
  }
})

module.exports = MyTitle