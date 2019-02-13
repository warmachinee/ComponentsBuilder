import React, { Component } from 'react';

import { Desktop, Tablet, Mobile} from './components/ResponsiveDevice'
import NavBar, { Lorem, BoxBlank } from './components/NavBar'
import SignIn from './components/SignIn'
import SlideShow from './components/SlideShow'
import img1 from './components/ic/img1.jpg'

const img2 = 'https://www.pixelstalk.net/wp-content/uploads/images2/Golf-Wallpapers-HD-Free-download.jpg';
const img3 = 'https://wallpaperplay.com/walls/full/f/8/0/293821.jpg';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      modalState: false,
      slideshowHeight: ''
    }
  }
  setModalState = () =>{
    this.setState((prev)=>{return {modalState: !prev.modalState}})
  }
  componentDidMount(){
    if(this.props.screen === 'Desktop'){
      this.setState({slideshowHeight: window.innerHeight-72})
    }else if (this.props.screen === 'Tablet') {
      this.setState({slideshowHeight: '80%'})
    }else{
      this.setState({slideshowHeight: '60%'})
    }
  }
  render() {
    const { modalState, slideshowHeight } = this.state
    const { setModalState } = this
    const imageSlide = [img1, img2, img3]
    return (
      <div>
        <NavBar signIn={setModalState}/>
        <SlideShow
          showIndex
          showArrows
          autoplay={false}
          enableKeyboard
          useDotIndex
          slideInterval={10000}
          defaultIndex={0}
          slides={imageSlide}
          effect={'fade'}
          height={slideshowHeight}
          width={'100%'} />
        { (modalState)?<SignIn show={modalState} close={setModalState}/>:null }
        <BoxBlank />
        <Lorem />
      </div>
    );
  }
}
const ExportApp = () =>{
  return(
    <React.Fragment>
      <Desktop>
        <App screen={'Desktop'}/>
      </Desktop>
      <Tablet>
        <App screen={'Tablet'}/>
      </Tablet>
      <Mobile>
        <App screen={'Mobile'}/>
      </Mobile>
    </React.Fragment>
  );
}
export default ExportApp;
