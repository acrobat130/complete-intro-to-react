var React = require('react')
var ReactDOM = require('react-dom')
var div = React.DOM.div
var MyTitle = require('./MyTitle')
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
