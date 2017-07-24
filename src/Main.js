import React, { Component } from 'react'
import HomePage from './HomePage'
import SignUp from './SignUp'
import {
  Route,
  Switch
} from 'react-router-dom'

class Main extends Component {
  render() {
    return(
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    )
  }
}

export default Main