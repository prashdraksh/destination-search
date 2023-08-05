// components/DestinationSearch/index.js
import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const filteredDestinationList = destinationsList.filter(i =>
      i.name.toLowerCase().includes(searchInput),
    )
    return (
      <div className="bg-container">
        <h1>Destination Search</h1>
        <div className="search-arrangment">
          <input
            type="search"
            className="inpu-element"
            onChange={this.onChangeSearchInput}
          />

          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              className="search-img"
              alt="search icon"
            />
          </div>
        </div>

        <ul>
          {filteredDestinationList.map(eachItem => (
            <DestinationItem destinationDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
