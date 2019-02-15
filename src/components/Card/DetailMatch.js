import React, { useState, useEffect } from 'react'
import * as colors from '../../data/color'
import * as ic from '../ic'
import Responsive from 'react-responsive';

const Desktop = props => <Responsive {...props} minWidth={1420} />;
const Tablet = props => <Responsive {...props} minWidth={914} maxWidth={1420} />;
const Mobile = props => <Responsive {...props} maxWidth={914} />;

function DetailMatch(props){
  const [ backButtonHover, setBackButtonHover ] = useState({background: 'none'})
  const { i, image, dataFromFetch } = props
  const style = {
    gridBorder: {
      minHeight: '20rem',
      boxSizing: 'border-box',
      border: `4px solid ${colors.blue_grey_700}`,
      borderRadius: '4px',
      margin: '2rem'
    },
    back: {
      display: 'flex',
    },
    backTitle: {
      color: colors.blue_grey_800,
      fontSize: '2rem',
      fontFamily: 'Roboto, sans serif',
      padding: '1rem 2rem 1.25rem 0px',
      margin: '1rem 0 1rem 0',
      borderRadius: '0 .5rem .5rem 0',
      cursor: 'pointer',
      transition: '.2s',
      background: backButtonHover.background
    },
    title: {
      color: colors.blue_grey_800,
      fontSize: '2rem',
      fontFamily: 'Roboto, sans serif',
      margin: '0 10% 2rem 10%',
      cursor: 'pointer'
    },
    secondaryTitle: {
      color: colors.blue_grey_700,
      fontSize: '1.5rem',
      fontFamily: 'Roboto, sans serif',
      margin: '0 10% 0.5rem 10%',
      cursor: 'pointer'
    },
  }
  const space = <div style={{flex: '1'}}></div>
  const detail = (dataFromFetch?
    <React.Fragment>
      <div style={style.title}>{dataFromFetch.matchname[i]}</div>
      <img style={{
          margin: '0 10% 2rem 10%',width: '80%'
        }} src={image[i]} />
      <p style={style.secondaryTitle}>วันที่ {dataFromFetch.datematch[i]}</p>
      <p style={style.secondaryTitle}>{dataFromFetch.fieldname[i]}</p>
      <p style={style.secondaryTitle}>Winner
        <p style={style.title}>{dataFromFetch.full[i][0]}{'\t'}{dataFromFetch.last[i][0]}</p>
      </p>
    </React.Fragment>:<p style={style.title}>Loading ...</p>
  );
  return(
    <div style={{background: 'white'}}>
      <div style={style.gridBorder}>
        <div
          style={style.back}
          onClick={props.back}>
          <div
            style={{
              padding: '1rem',margin: '1rem 0 1rem 3rem',cursor: 'pointer',
              borderRadius: '.5rem 0 0 .5rem',transition: '.2s',
              background: backButtonHover.background
            }}
            onMouseEnter={()=>setBackButtonHover({background: colors.blue_grey_100})}
            onMouseLeave={()=>setBackButtonHover({background: 'none'})}
            >
            <ic.arrow_back
              height="2.5rem" width="2.5rem"
              color={colors.blue_grey_800}/>
          </div>
          <p
            style={style.backTitle}
            onMouseEnter={()=>setBackButtonHover({background: colors.blue_grey_100})}
            onMouseLeave={()=>setBackButtonHover({background: 'none'})}>BACK</p>
        </div>
        <div style={{width: '100%',height: '4px',background: 'black',marginBottom: '2rem'}}></div>
        {detail}
      </div>
    </div>
  );
}
export default DetailMatch;
