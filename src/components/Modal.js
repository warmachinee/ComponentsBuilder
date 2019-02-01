import React from 'react';
import ic_close from './ic/baseline-clear-24px.svg'

const Modal = ({ title,handleClose, show, children }) => {
  const modalEnable = {
    position    : 'fixed',
    top         : '0',
    left        : '0',
    width       : '100%',
    height      : '100%',
    background  : 'rgba(0, 0, 0, 0.6)',
    display     : 'block',
    zIndex      : '20'
  }
  const modalDisable = {
    position    : 'fixed',
    top         : '0',
    left        : '0',
    width       : '100%',
    height      : '100%',
    background  : 'rgba(0, 0, 0, 0.6)',
    display     : 'none'
  }
  const modalMain = {
    position    : 'fixed',
    background  : 'white',
    width       : '50%',
    height      : 'auto',
    top         : '50%',
    left        : '50%',
    transform   : 'translate(-50%,-50%)',
  }
  const showHideClassName = show ? modalEnable : modalDisable;
  const CloseBtn = () => {
    const closeStyle = {
      cursor      : 'pointer',
      height      : '2rem',
      margin      : '.5rem .5rem 0 0'
    }
    return (
      <div style={{display: 'flex'}}>
        <div style={{flex: '1'}}></div>
        <img style={closeStyle} onClick={handleClose} src={ic_close}></img>
      </div>
    );
  }
  const modalTitle = {
    textAlign     : 'center',
    fontSize      : '1.5rem',
    fontWeight    : '600',
    margin        : '0'
  }
  return (
    <div style={showHideClassName}>
      <div style={modalMain}>
        <CloseBtn />
        <p style={modalTitle}>{title}</p>
        {children}
      </div>
    </div>
  );
};
export default Modal;
