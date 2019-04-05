import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (event) => {
     drawChromeBoiAtCoords(event.clientX, event.clientY)
  }

  handleKeyPress = (event) => {
    console.log("hi")
    if (event.key === 'a') {
      resize('+')
    } else if (event.key === 's'){
      resize('-')
    }
  }


  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        onClick={() => toggleCycling()}
        onKeyPress={(ev) => this.handleKeyPress(ev)}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
