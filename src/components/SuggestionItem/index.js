// Write your code here
import './index.css'

const ListItem = props => {
  const {eachItem} = props
  const {suggestion} = eachItem

  return (
    <li className="list-details">
      <p className="item">{suggestion}</p>
      <button type="button" className="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="icon"
        />
      </button>
    </li>
  )
}

export default ListItem
