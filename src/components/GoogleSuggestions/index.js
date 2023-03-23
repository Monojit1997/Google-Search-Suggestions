// Write your code here
import {Component} from 'react'

import './index.css'

import ListItem from '../SuggestionItem/index'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeListElement = event => {
    this.setState({searchInput: event.target.value.toLowerCase()})
  }

  render() {
    const {suggestionsList} = this.props

    const {searchInput} = this.state

    const searchResults = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput),
    )

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-image"
        />
        <div className="search-list-container">
          <div className="search-bos-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="icon"
            />
            <input
              type="search"
              className="input"
              placeholder="Search Google"
              onChange={this.onChangeListElement}
              value={searchInput}
            />
          </div>
          <ul>
            {searchResults.map(eachItem => (
              <ListItem eachItem={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
