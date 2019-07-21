import React, {Component} from 'react'
import {connect} from 'react-redux'
import {buyOrder} from '../store/orderReducer'

class OrderCheckout extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    this.props.buyOrder(this.props.match.params.id)
  }

  render() {
    const {cart} = this.props
    return !cart ? (
      <div>Loading!</div>
    ) : (
      <div className="checkout">
        <h2>Price: ${cart.price}</h2>
        <h2>Order Status: {cart.status}</h2>
        <h2>Order Number: {cart.id}</h2>
        <h2>Cart: </h2>
        {cart.map(item => {
          return (
            <div key={item.id}>
              <img src={item.img} />
              <h3>{item.name}</h3>
              <h3>{item.quantity}</h3>
            </div>
          )
        })}
        <button
          type="submit"
          onClick={() => this.handleSubmit()}
          id="OrderProcess"
        >
          Process Order
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => state.orderReducer

const mapDispatchToProps = dispatch => ({
  buyOrder: id => dispatch(buyOrder(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderCheckout)
