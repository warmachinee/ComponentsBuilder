import React, { useState, useEffect} from 'react';
import * as ic from './ic'
import * as colors from '../data/color'
import Modal from './Modal'

export default function Dialog(props){
  function Body(props){
    const { show, close, children } = props
    const [ fadeStyle, setFadeStyle ] = useState({opacity: '1',zIndex: '20'})
    const bodyStyle = {
      position    : 'fixed',
      top         : '0',
      left        : '0',
      width       : '100%',
      height      : '100%',
      display     : 'block',
      zIndex      : fadeStyle.zIndex,
      opacity     : fadeStyle.opacity,
      transition  : '.3s'
    }
    function Fade(){
      if(props.show){
        setFadeStyle({opacity: '1',zIndex: '20'})
      }else{
        setFadeStyle({opacity: '0',zIndex: '-1'})
      }
    }
    
    return(
      <div style={bodyStyle}>
        <Backdrop close={close}/>
        <Grid close={close}>{children}</Grid>
      </div>
    );
  }
  function Grid(props){
    const { close } = props
    const [ icColor, setIcColor ] = useState(colors.blue_200)
    const grid = {
      boxSizing   : 'border-box',
      position    : 'fixed',
      background  : 'white',
      width       : '100%',
      maxWidth    : '25rem',
      maxHeight   : '100%',
      top         : '50%',
      left        : '50%',
      transform   : 'translate(-50%,-50%)',
      overflow    : 'auto'
    }
    function Close(){
      const style={
        display: 'flex',
        justifyContent: 'flex-end',
      }
      return(
        <div style={style}>
          <div style={{cursor: 'pointer'}} onClick={close}
            onMouseEnter={()=>setIcColor(colors.blue_900)}
            onMouseLeave={()=>setIcColor(colors.blue_200)}>
            <ic.close color={icColor} width="2.5rem" height="2.5rem" />
          </div>
        </div>
      );
    }
    return(
      <div style={grid}>
        <Close />
        {props.children}
      </div>
    );
  }
  function Backdrop(props){
    const { show, close } = props
    const style = {
      position    : 'fixed',
      top         : '0',
      left        : '0',
      width       : '100%',
      height      : '100%',
      background  : 'rgba(0, 0, 0, 0.6)'
    }
    return(
      <div style={style} onClick={close}></div>
    );
  }
  return(
    <Body show={props.show} close={props.close}>
      {props.children}
    </Body>
  );
}
