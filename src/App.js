import React, { Component } from 'react'
import './App.css'
import Header from './Header'
import axios from 'axios'

import {
  BrowserRouter as Router,
} from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './redux/store'
import Main from './Main'


class App extends Component {
  componentDidMount() {
    let userId = localStorage.getItem('userId')
    console.log('userId', userId)
    if(userId) {
      axios.get(`http://192.168.0.122:3008/user/${userId}`).then(res => {
        console.log(res.data)
        store.dispatch({ type: 'AUTH_USER', username: res.data.user.username })
      })
    }
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header />
            <Main />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App