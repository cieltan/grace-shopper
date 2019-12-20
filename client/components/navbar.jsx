import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Login, Signup} from './AuthForm'
import {UserHome} from './UserHome'
import {me} from '../store/user'
import {CartCounter} from './index'

class Navbar extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn, handleClick} = this.props
    return (
      <nav className="navbar">
        <h1 id="title">
          <Link to="/home">SHOP RICE</Link>
        </h1>
        {isLoggedIn ? (
          <div className="navbar__buttons">
            {/* The navbar will show these links after you log in */}
            <div>
              <UserHome user={this.props.user} />
            </div>
            <Link to="/home">Home</Link>
            <Link to="/orders">Order History</Link>
            <a href="#" onClick={handleClick}>
              Logout
            </a>
            <Link to="/cart">
              <CartCounter />
            </Link>
          </div>
        ) : (
          <div className="navbar__buttons">
            {/* The navbar will show these links before you log in */}
            <div className="ui compact menu">
              <div className="ui simple dropdown item">
                Login
                <div id="login-form" className="menu">
                  <div className="item">
                    <Login />
                  </div>
                </div>
              </div>
              <div className="ui simple dropdown item">
                Signup
                <div id="signup-form" className="menu">
                  <div className="item">
                    <Signup />
                  </div>
                </div>
              </div>
              <Link to="/cart">
                <CartCounter />
              </Link>
            </div>
          </div>
        )}
      </nav>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    },
    loadInitialData() {
      dispatch(me())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
