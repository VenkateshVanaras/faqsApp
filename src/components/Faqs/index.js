// Write your code here.

import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  constructor(props) {
    super(props)
    const newList = this.props
    const numberList = newList.faqsList
    this.state = {initialList: numberList}
  }

  setStateValue = list => {
    this.setState({initialList: list})
  }

  getStatic = id => {
    const {initialList} = this.state

    const isActiveSetList = initialList.map(each => {
      if (id === each.id) {
        return {...each, isActive: !each.isActive}
      }
      return each
    })

    this.setState({initialList: isActiveSetList})
  }

  render() {
    const {initialList} = this.state

    return (
      <div className="app-container">
        <div className="main-card">
          <h1 className="main-heading">FAQs</h1>
          <ul className="unordered-list">
            {initialList.map(eachItem => (
              <FaqItem
                eachItem={eachItem}
                getStatic={this.getStatic}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
