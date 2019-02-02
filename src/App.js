import React, { Component } from 'react';

import NavBar, { Lorem } from './components/NavBar'
import Dialog from './components/Dialog'


export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      modalState: false
    }
  }
  setModalState = () =>{
    this.setState((prev)=>{return {modalState: !prev.modalState}})
  }
  render() {
    const { modalState } = this.state
    const { setModalState } = this
    return (
      <div>
        <NavBar />
        <button style={{padding: '1rem'}} onClick={()=>setModalState()}>Modal</button>
        <Dialog show={modalState} close={()=>setModalState()}/>
        <Lorem />
      </div>
    );
  }
}
