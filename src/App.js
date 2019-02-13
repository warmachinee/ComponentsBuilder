import React, { Component } from 'react';

import NavBar, { Lorem } from './components/NavBar'
import SignIn from './components/SignIn'
import Slideshow from './components/Announcement'
import img from './components/ic/img1.jpg'

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
        <NavBar signIn={setModalState}/>
        <Slideshow
          showIndex
          showArrows
          autoplay
          enableKeyboard
          slideInterval={10000}
          defaultIndex={1}
          slides={[img, img, img, img]}
          effect={'left'}
          height={'90%'}
          width={'100%'}
        />
        { (modalState)?<SignIn show={modalState} close={setModalState}/>:null }
        <Lorem />
      </div>
    );
  }
}
