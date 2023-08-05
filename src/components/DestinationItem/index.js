// components/DestinationItem/index.js

import {Component} from 'react'
import './index.css'

class DestinationItem extends Component {
  render() {
    const {destinationDetails} = this.props

    return (
      <li>
        <img
          src={destinationDetails.imgUrl}
          alt={destinationDetails.name}
          className="image"
        />
        <p>{destinationDetails.name}</p>
      </li>
    )
  }
}
export default DestinationItem
