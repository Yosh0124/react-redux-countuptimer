import React, { Component } from 'react'
import Time from '../containers/Time'
import TimerController from '../containers/TimerController'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Time />
        <TimerController />
      </div>
    )
  }
}