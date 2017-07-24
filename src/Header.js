import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'
import { connect } from 'react-redux'

import store from './redux/store'

class Header extends Component {

  logout = () => {
    console.log('logout')
    localStorage.removeItem('userId')
    store.dispatch({ type: 'LOG_OUT'})
  }

  render() {
    let authStr = (
      <div>
        <Link to="/signup">注册</Link>
        <Link to="/login">登录</Link>
      </div>
    )

    let userInfo = (
      <div>
         {this.props.currentUser}
         <Link to="" onClick={this.logout}>退出</Link>
      </div>
    )

    return(
      <header>
        <Link to="/" >首页</Link>
        { this.props.isAuthenticated ? userInfo: authStr   }
      </header>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.account.isAuthenticated,
  currentUser: state.account.currentUser
})

export default connect(mapStateToProps)(Header)