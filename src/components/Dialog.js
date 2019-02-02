import React, { useState, useEffect} from 'react';
import {Desktop, Tablet, Mobile} from './ResponsiveDevice'
import * as ic from './ic'
import * as colors from '../data/color'
import Modal from './Modal'

export default function Dialog(props){
  function Body(props){
    const { show, close } = props
    const enable = {
      position    : 'fixed',
      top         : '0',
      left        : '0',
      width       : '100%',
      height      : '100%',
      display     : 'block',
      zIndex      : '20'
    }
    const disable = {
      position    : 'fixed',
      top         : '0',
      left        : '0',
      width       : '100%',
      height      : '100%',
      display     : 'none'
    }
    const style = show ? enable : disable;
    return(
      <div style={style}>
        <Backdrop close={close}/>
        <Grid close={close}></Grid>
      </div>
    );
  }
  function Grid(props){
    const { close } = props
    const [ icColor, setIcColor ] = useState(colors.blue_200)
    const grid = {
      position    : 'fixed',
      background  : 'white',
      width       : '50%',
      height      : 'auto',
      top         : '50%',
      left        : '50%',
      transform   : 'translate(-50%,-50%)',
    }
    function Close(){
      const style={
        float: 'right',
        cursor: 'pointer',
      }
      return(
        <div style={style} onClick={close} onMouseEnter={()=>setIcColor(colors.blue_900)} onMouseLeave={()=>setIcColor(colors.blue_200)}>
          <ic.close color={icColor} width="2rem" height="2rem"/>
        </div>
      );
    }
    return(
      <div style={grid}><Close /></div>
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
    <React.Fragment>
      <Mobile>
        <Body show={props.show} close={props.close}></Body>
      </Mobile>

      <Tablet>
        Dialog
      </Tablet>

      <Desktop>
        Dialog
      </Desktop>
    </React.Fragment>
  );
}
