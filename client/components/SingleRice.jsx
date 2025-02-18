import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchSingleRice} from '../store/singleRiceReducer'
import {putCart} from '../store/cartReducer'
import {Button, Icon} from 'semantic-ui-react'

class SingleRice extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const {singleRice} = this.props
    this.props.putCart(singleRice)
  }
  componentDidMount() {
    this.props.fetchSingleRice(this.props.match.params.riceId)
  }

  render() {
    const {singleRice} = this.props
    return (
      <div className="singleProduct-page" key={singleRice.id}>
        <div className="product">
          <img className="riceIMG" src={singleRice.img} />
        </div>
        <div className="content">
          <div>
            <h2>{singleRice.name}</h2>
            <h3>Type: {singleRice.type}</h3>
            <h3>Origin: {singleRice.origin} </h3>
            <h4>Description: {singleRice.description}</h4>
            <h3>Price (per 10 pound bag): ${singleRice.price}</h3>
          </div>
          <Button type="submit" onClick={() => this.handleClick()} id="addCart">
            ADD TO CART <Icon name="cart" />
          </Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    singleRice: state.singleRiceReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSingleRice: riceId => dispatch(fetchSingleRice(riceId)),
    putCart: item => dispatch(putCart(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleRice)
