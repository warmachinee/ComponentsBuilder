import React, { Component } from 'react';

import NavBar, { Lorem } from './components/NavBar'
import Dialog from './components/Dialog'


export default class App extends Component {
  constructor(props){
    super(props)

  }
  render() {
    return (
      <div>
        <NavBar />
        <Dialog />
        <Lorem />
      </div>
    );
  }
}
