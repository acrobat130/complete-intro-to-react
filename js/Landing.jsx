const React = require('react')
const { Link } = require('react-router')
// this is an instance of the myTitle class
// function with no curly braces has implicit return
const Landing = () => (
    // to add styling
    // div({style: {color: "red"}},
    // capital MyTitle means use element I created
  <div className='home-info'>
    <h1 className='title'>svideo</h1>
    <input className='search' type='text' placeholder='Search'/>
    <Link to='/search' className='browse-all'> or Browse All</Link>
  </div>
)

module.exports = Landing
