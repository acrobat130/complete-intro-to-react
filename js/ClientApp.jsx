const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Search = require('./Search')
// gets us ReactRouter.router, ReactRouter.route, and ReactRouter.hashHistory
const { Router, Route, hashHistory } = require('react-router')

// one individual route, uses component as the view/display
const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Landing} />
    <Route path='/search' component={Search} />
  </Router>
)

ReactDOM.render(<App/>, document.getElementById('app'))
