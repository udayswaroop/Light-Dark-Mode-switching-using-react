// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isLight: true}

  onChangeMode = () => {
    this.setState(prevState => ({isLight: !prevState.isLight}))
  }

  getButtonText = () => {
    const {isLight} = this.state

    return isLight ? 'Light Mode' : 'Dark Mode'
  }

  getButtonContainer = () => {
    const {isLight} = this.state

    return isLight ? 'darkButton' : 'lightButton'
  }

  getContentContainer = () => {
    const {isLight} = this.state

    return isLight ? 'contentDarkContainer' : 'contentLightContainer'
  }

  getHeading = () => {
    const {isLight} = this.state

    return isLight ? 'darkHeading' : 'lightHeading'
  }

  render() {
    const buttonText = this.getButtonText()
    const contentContainer = this.getContentContainer()
    const buttonContainer = this.getButtonContainer()
    const heading = this.getHeading()

    return (
      <div className="bg-container">
        <div className={contentContainer}>
          <h1 className={heading}>Click To Change Mode</h1>
          <button className={buttonContainer} onClick={this.onChangeMode}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
