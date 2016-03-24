var React = require('react')
var div = React.DOM.div
var h1 = React.DOM.h1

// make a new class
var MyTitle = React.createClass({
  // ES6 syntax for defining a function
  // each component needs a render function
  render () {
    // must return a component
    return (
      // can only return one thing - nested is fine though
      div(null,
        h1({style: {color: this.props.color}}, this.props.title)
      )
    )
  }
})

module.exports = MyTitle