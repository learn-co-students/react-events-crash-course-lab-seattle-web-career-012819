import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (event) => {
    drawChromeBoiAtCoords(event.clientX, event.clientY);
  }

  /* TODO: Create an event handler which, when fired, invokes the provided
   * `toggleCycling` function with no arguments. Don't forget the click event
   * listener that should fire it!
   */

  handleKeyDown = (event) =>{
    switch (event.key){
    case 'a':
      resize('+')
      break;
    case 's':
      resize('-')
      break;
    }
  }

  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        onKeyDown={this.handleKeyDown}
        onClick={() => {toggleCycling()}}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
