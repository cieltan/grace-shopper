import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllOrders} from '../store/orderReducer'

class AllOrders extends Component {
  componentDidMount() {
    this.props.getAllOrders()
  }
  render() {
    const {orders} = this.props
    return !orders ? (
      <div>Loading!</div>
    ) : (
      <ul>
        {orders.map(order => (
          <div key={order.id}>
            <li>
              <h1>Order:</h1>
              {order.cart.map(item => (
                <div key={item.id}>
                  <h4>
                    {item.quantity} units of {item.name}
                  </h4>
                </div>
              ))}
            </li>
            <li>Status:{order.status}</li>
            <li>Price:{order.price}</li>
          </div>
        ))}
      </ul>
    )
  }
}

const mapStateToProps = state => state.orderReducer

const mapDispatchToProps = dispatch => ({
  getAllOrders: () => dispatch(getAllOrders())
})

export default connect(mapStateToProps, mapDispatchToProps)(AllOrders)
