// note for standard to know that we intend to have React and ReactDOM as global variables
/* global React ReactDOM */
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

// create a factory
var MyTitleFact = React.createFactory(MyTitle)

// this is an instance of the myTitle class
var MyFirstComponent = (
  // to add styling
  // div({style: {color: "red"}},
  div(null,
    MyTitleFact({title: 'Props are great', color: 'rebeccapurple'}), // interchangable with React.createElement(MyTitle, null)
    MyTitleFact({title: 'Use props everywhere', color: 'mediumaquamarine'}),
    MyTitleFact({title: 'Props are the best', color: 'peru'})
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
