// Write your code here.

import './index.css'

const FaqItem = props => {
  const {eachItem, getStatic} = props
  const {answerText, id, questionText, isActive} = eachItem

  const getOnClicked = () => {
    getStatic(id)
  }

  const btnImg = isActive
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
  const altFor = isActive ? 'minus' : 'plus'

  return (
    <li className="list-item">
      <div className="header-and-button">
        <h1 className="heading">{questionText}</h1>
        <button onClick={getOnClicked} className="button" type="button">
          <img alt={altFor} src={btnImg} />
        </button>
      </div>
      {isActive && (
        <div>
          <hr /> <p className="para">{answerText}</p>
        </div>
      )}
    </li>
  )
}

export default FaqItem
