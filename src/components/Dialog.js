import React, { useState, useEffect} from 'react';
import {Desktop, Tablet, Mobile} from './ResponsiveDevice'
import * as ic from './ic'
import * as colors from '../data/color'
import Modal from './Modal'

export default function Dialog(){
  function Body(){
    return(
      <div>Grid</div>
    );
  }
  function Backdrop(){
    return(
      <div>Backdrop</div>
    );
  }
  const [ modalState, setModalState ] = useState(false)
  return(
    <React.Fragment>
      <Mobile>
        <button onClick={()=>setModalState(!modalState)}>Modal</button>
        <Modal title="testttt"
          show={modalState} handleClose={()=>setModalState(!modalState)}
          />
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
