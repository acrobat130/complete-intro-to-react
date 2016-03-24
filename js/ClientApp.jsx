const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Search = require('./Search')
const Layout = require('./Layout')
// gets us ReactRouter.router, ReactRouter.route, and ReactRouter.hashHistory
const { Router, Route, IndexRoute, hashHistory } = require('react-router')

// one individual route, uses component as the view/display
const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Layout} >
      <IndexRoute component={Landing} />
      <Route path='/search' component={Search} />
    </Route>
  </Router>
)

ReactDOM.render(<App/>, document.getElementById('app'))
