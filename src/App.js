import React, { Component } from 'react';

import { Desktop, Tablet, Mobile} from './components/ResponsiveDevice'
import * as colors from './data/color'
import NavBar, { Lorem, BoxBlank } from './components/NavBar'
import SignIn from './components/SignIn'
import SlideShow from './components/SlideShow'
import MatchList from './components/Card/MatchCard'
import DetailMatch from './components/Card/DetailMatch'
import img3 from './components/ic/img4.jpg'

const img1 = 'https://www.kolfers.com/galleries/1000116/ee2f950f311d130351cf9e82be7efb5e1cbfdb48.jpg';
const img2 = 'https://scontent.fbkk5-1.fna.fbcdn.net/v/t31.0-8/886690_616794545001961_1645623112_o.jpg?_nc_cat=109&_nc_ht=scontent.fbkk5-1.fna&oh=ea6d553361aa0383161031cbf29ff3b4&oe=5CF3E277';
//const img3 = 'http://www.watermillgolf.com/home_files/watermill_banner_02.jpg';
const img4 = 'https://www.kolfers.com/galleries/1000108/469ebee1e27062e0e4b1c4c84a0fe2f39647c856.jpg';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      loadedImg: 0,
      modalState: false,
      slideshowHeight: '',
      imageSlide: [img1, img2, img3, img4],
      dataFromFetch: null,
      detailPageState: false,
      detailIndex: 0
    }
  }
  setModalState = () =>{
    this.setState((prev)=>{return {modalState: !prev.modalState}})
  }
  async fetchUrl(){
    const res = await fetch('http://pds.in.th/php/showSNT.php')
    const json = await res.json()
    await new Promise((resolve)=>{
      resolve()
      this.setState({dataFromFetch: json})
    })
  }
  componentDidMount(){
    if(this.props.screen === 'Desktop'){
      this.setState({slideshowHeight: window.innerHeight-80-(window.innerHeight*.06)})
    }else if (this.props.screen === 'Tablet') {
      this.setState({slideshowHeight: window.innerHeight*.7})
    }else{
      this.setState({slideshowHeight: window.innerHeight*.5})
    }
    this.fetchUrl()
  }
  clickDetail=(i)=>{
    this.setState((prev)=>{
      return {
        detailPageState: !prev.detailPageState,
        detailIndex: i
      }
    })
  }
  render() {
    const {
      modalState, slideshowHeight, loadedImg, imageSlide,
      dataFromFetch, detailPageState, detailIndex
    } = this.state
    const { setModalState, clickDetail } = this
    const Slide = ( dataFromFetch?
      <SlideShow
        clickDetail={clickDetail}
        dataFromFetch={dataFromFetch}
        showIndex
        showArrows
        autoplay
        enableKeyboard
        useDotIndex
        slideInterval={5000}
        defaultIndex={0}
        slides={imageSlide}
        effect={'fade'}
        height={slideshowHeight}
        width={'95%'} />
      :<p>Loading ...</p>);
    const MainPage = (
      <React.Fragment>
        {Slide}
        <MatchList
          clickDetail={clickDetail}
          imageSlide={imageSlide}
          dataFromFetch={dataFromFetch}/>
      </React.Fragment>
    );
    return (
      <div style={{background: colors.grey_100}}>
        <NavBar signIn={setModalState}/>
        { (modalState)?<SignIn show={modalState} close={setModalState}/>:null }
        { detailPageState?
          dataFromFetch?
            <DetailMatch
              i={this.state.detailIndex}
              image={imageSlide}
              dataFromFetch={dataFromFetch}
              back={()=>this.setState({detailPageState: false})}/>
            :<p>Loading ...</p>
          :MainPage }
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
