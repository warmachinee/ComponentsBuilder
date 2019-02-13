import React, { useState, useEffect} from 'react';
import {Desktop, Tablet, Mobile} from './ResponsiveDevice'
import * as ic from './ic'
import * as colors from '../data/color'

export default function NavBar(props){

  function Nav(props){
    const [ screenType, setScreenType ] = useState(props.screenType)
    const [ windowScrollY, setWindowScrollY ] = useState(null)
    const [ navStyle, setNavStyle ] = useState({opacity: '1',background: '#0D47A1'})
    const [ navPosition, setNavPosition ] = useState({position: 'sticky',top: '0'})
    const [ expand, setExpand ] = useState({height: '0px',minHeight: '0px',opacity: '0',state: false})
    const style = {
      nav: {
        position: navPosition.position,
        top: navPosition.top,
        boxSizing: 'border-box',
        opacity: navStyle.opacity,
        background: navStyle.background,
        width: '100%',
        transition: '.6s ease-in-out',
        boxShadow: '0 .25rem .75rem rgba(0, 0, 0, .9)',
        zIndex: '10'
      },
      ul: {
        listStyleType: 'none',
        margin: '0',
        padding: '0',
        overflow: 'hidden'
      },
      liRight: {
        float: 'right'
      },
      liLeft: {
        float: 'left'
      },
      a: {
        display: 'block',
        color: 'white',
        textAlign: 'center',
        textDecoration: 'none',
        padding: '1rem',
        fontSize: '1.5rem',
        cursor: 'pointer',
        transition: '.6s ease-in-out',
      },
      expand: {
        width: '100%',
        height: expand.height,
        minHeight: expand.minHeight,
        background: '#333',
        transition: '.2s ease-in-out',
        position: 'fixed',
        top: (screenType === 'mobile')? '4rem': '4.5rem',
        opacity: expand.opacity,
      }
    }
    function Menu(props){
      const { onClick, children } = props
      const [ background, setBackground ] = useState('none')
      const hoverStyle = {
        width: (screenType === 'mobile')? '2rem': '2.5rem',
        height: (screenType === 'mobile')? '2rem': '2.5rem',
        display: 'block',
        color: 'white',
        textAlign: 'center',
        textDecoration: 'none',
        padding: '1rem',
        fontSize: '1.5rem',
        cursor: 'pointer',
        transition: '.2s ease-in-out',
        background: background
      }
      return(
        <li style={style.liLeft}>
          <a onClick={onClick}
            onMouseOver={()=>setBackground(colors.blue_800)}
            onMouseOut={()=>setBackground('none')}
            style={hoverStyle}>
            { screenType === 'desktop' ?
              <div style={{width: '100%',height: '100%'}}></div>:<ic.menu color="white" width="100%" height="100%"/>
            }
          </a>
        </li>
      );
    }
    function Logo(props){
      const { onClick, children } = props
      const [ background, setBackground ] = useState('none')
      const hoverStyle = {
        width: (screenType === 'mobile')? '2rem': '2.5rem',
        height: (screenType === 'mobile')? '2rem': '2.5rem',
        display: 'block',
        padding: (screenType === 'mobile')? '1rem .25rem 1rem .25rem': '1rem',
        cursor: 'pointer',
      }
      const logoText = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
        textDecoration: 'none',
        padding: (screenType === 'mobile')? '1.4rem .5rem': '1.5rem 1rem',
        fontSize: (screenType === 'mobile')? '1rem': '1.15rem',
        fontWeight: '5030',
        fontFamily: 'Roboto, sans-serif',
        letterSpacing: (screenType === 'mobile')? '0.05rem': '.1rem',
        cursor: 'pointer',
        transition: '.2s ease-in-out',
        background: background
      }
      return(
        <React.Fragment>
          <li style={style.liLeft}>
            <a onClick={onClick}
              style={hoverStyle}><ic.logo />
            </a>
          </li>
          <li style={style.liLeft}>
            <a onClick={onClick}
              onMouseOver={()=>setBackground(colors.blue_800)}
              onMouseOut={()=>setBackground('none')}
              style={logoText}>THAI-PGA
            </a>
          </li>
        </React.Fragment>
      );
    }
    function SignIn(props){
      const { signIn, children } = props
      const [ background, setBackground ] = useState('#2196f3')
      const [ buttonAction, setButtonAction ] = useState({color: colors.blue_900,background: 'white'})
      const buttonStyle = {
        display: 'block',
        padding: (screenType === 'mobile')? '.425rem 1.25rem': '.5rem 1.5rem',
        margin: (screenType === 'mobile')? '1rem': '1.175rem 1.5rem',
        color: buttonAction.color,
        border: 'none',
        background: buttonAction.background,
        borderRadius: '.2rem',
        textAlign: 'center',
        textDecoration: 'none',
        fontSize: '1rem',
        fontWeight: '500',
        cursor: 'pointer',
        transition: '.2s'
      }
      async function HandleOnlclick(){
        setButtonAction({color: colors.blue_900,background: colors.light_blue_300})
        await new Promise((resolve)=>{
          setTimeout(()=>{
            resolve()
            setButtonAction({color: colors.blue_900,background: 'white'})
          },150)
        })
        signIn()
      }
      return(
        <li style={style.liRight}>
          <button
            onClick={HandleOnlclick}
            onMouseEnter={()=>setButtonAction({color: colors.blue_900,background: colors.light_blue_100})}
            onMouseLeave={()=>setButtonAction({color: colors.blue_900,background: 'white'})}
            style={buttonStyle}>{children}</button>
        </li>
      );
    }
    const Expand = (
      <div style={style.expand}>
        <p style={{color: 'white'}}>Item</p>
        <p style={{color: 'white'}}>Item</p>
        <p style={{color: 'white'}}>Item</p>
        <p style={{color: 'white'}}>Item</p>
        <p style={{color: 'white'}}>Item</p>
        <p style={{color: 'white'}}>Item</p>
        <p style={{color: 'white'}}>Item</p>
        <p style={{color: 'white'}}>Item</p>
      </div>
    );
    function HandleLogoClick(){
      console.log('Logo Clicked');
    }
    function HandleExpand(){
      if(expand.state){
        setExpand({height: '0px',minHeight: '0px',opacity: '0',state: false})
      }else{
        setExpand({height: 'auto',minHeight: '30%',opacity: '.9',state: true})
      }
    }
    function Pos(){
      if(window.scrollY > 1080){
        setNavPosition({position: 'fixed',top: '0'})
      }else{
        setNavPosition({position: 'sticky',top: '0'})
      }
      if(window.scrollY > windowScrollY){
        setNavStyle({opacity: '.8',background: colors.blue_900})
      }else{
        setNavStyle({opacity: '1',background: colors.blue_900})
      }
    }
    useEffect(()=>{
      if(screenType ===  'mobile'){
        setWindowScrollY(64)
      }else{
        setWindowScrollY(72)
      }
      window.addEventListener("scroll",Pos)
      return ()=>{
        window.removeEventListener("scroll",Pos)
      }
    },[ navStyle, navPosition ])

    return(
      <React.Fragment>
        <nav style={style.nav}>
          <ul style={style.ul}>
            <Menu onClick={()=>HandleExpand()} />
            <Logo onClick={()=>HandleLogoClick()} />
            <SignIn signIn={props.signIn}>Sign in</SignIn>
          </ul>
        </nav>
        {Expand}
      </React.Fragment>
    );
  }

  return(
    <React.Fragment>
      <Mobile>
        <Nav screenType="mobile" signIn={props.signIn}/>
      </Mobile>

      <Tablet>
        <Nav screenType="tablet" signIn={props.signIn}/>
      </Tablet>

      <Desktop>
        <Nav screenType="desktop" signIn={props.signIn}/>
      </Desktop>
    </React.Fragment>
  );
}


export const Lorem = () =>{
  const loremNum = []
  for(var i = 0;i < 10;i++){
    loremNum.push(i)
  }
  return(
    <div style={{width: '100%',height: '70rem',background: '#F5F5F5',boxSizing: 'border-box',
      border: (true)?'none':'1px solid black'}}>
      {loremNum.map((tagP)=>
        <p key={tagP} style={{fontSize: '20px',letterSpacing: '2px',margin: '0'}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      )}
    </div>
  )
}

export const Box = () =>{
  return(
    <div style={{width: '100%',height: '20rem',background: '#F5F5F5',
      boxSizing: 'border-box',border: '1px solid black'}}>
    </div>
  )
}
