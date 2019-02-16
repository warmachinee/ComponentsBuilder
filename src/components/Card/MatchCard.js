import React, { useEffect, useState } from 'react'
import * as colors from '../../data/color'
import Responsive from 'react-responsive';

const Desktop = props => <Responsive {...props} minWidth={1420} />;
const Tablet = props => <Responsive {...props} minWidth={914} maxWidth={1420} />;
const Mobile = props => <Responsive {...props} maxWidth={914} />;

function MatchCard(props){
  const { image, dataFromFetch, screen } = props
  const [ cardHover, setCardHover ] = useState({boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'})
  const [ detailButtonHover, setDetailButtonHover ] = useState({backgroundColor: colors.light_blue_700})
  let cardWidth;
  if(screen === 'Mobile'){
    cardWidth = {
      minWidth: '21.875rem',
      maxWidth: '21.875rem'
    }
  }else if( screen === 'Tablet' ){
    cardWidth = {
      minWidth: '21.875rem',
      maxWidth: '25rem'
    }
  }else if( screen === 'Desktop' ){
    cardWidth = {
      minWidth: '21.875rem',
      maxWidth: '25rem'
    }
  }
  const style = {
    grid: {
      display: 'flex'
    },
    container: {
      position: 'relative',
      boxSizing: 'border-box',
      background: 'white',
      width: '100%',
      maxWidth: cardWidth.maxWidth,
      minWidth: cardWidth.minWidth,
      minHeight: '10rem',
      boxShadow: cardHover.boxShadow,
      borderRadius: '.5rem',
      margin: '2rem',
      transition: '.2s'
    },
    header: {
      position: 'relative',
      boxSizing: 'border-box',
      padding: '1rem',
      borderRadius: '.5rem .5rem 0 0',
    },
    title:{
      fontFamily: 'Roboto, sans-serif',
      margin: '0',
      marginBottom: '.5rem',
      fontSize: '1.375rem',
      fontWeight: 'bold',
      color: colors.blue_grey_700,
      overflow: 'hidden',
      letterSpacing: '.1rem'
    },
    secondaryText:{
      margin: '0',
      color: colors.blue_grey_700
    },
    media:{

    },
    mediaLoading:{
      width: '1rem',
      height: '1rem',
      background: 'black',
      borderRadius: '50%',
      opacity: '.5',
      margin: '1rem'
    },
    detailButton: {
      float: 'right',
      padding: '.75rem 1rem',
      margin: '1rem',
      borderRadius: '.2rem',
      fontWeight: '900',
      letterSpacing: '.1rem',
      fontSize: '1.25rem',
      fontFamily: 'Roboto, sans serif',
      backgroundColor: detailButtonHover.backgroundColor,
      boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
      color: 'white',
      transition: '.2s',
      cursor: 'pointer'
    }
  }
  const space = <div style={{flex:'1'}}></div>
  return(
    <div style={style.grid}>
      {space}
      <div style={style.container}
        onMouseEnter={()=>setCardHover({boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'})}
        onMouseLeave={()=>setCardHover({boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'})}>
        <div style={style.header}>
          <p style={style.title}>{ dataFromFetch? dataFromFetch.matchname[props.i]: 'Matchname'}</p>
          <p style={style.secondaryText}>
            { dataFromFetch? dataFromFetch.fieldname[props.i]: 'Location'}
          </p>
          <p style={style.secondaryText}>
            { dataFromFetch? 'วันที่\t' + dataFromFetch.datematch[props.i]: 'วันที่'}
          </p>
        </div>
        <div style={style.media}>
          {null&&<div style={{display: 'flex',position: 'absolute'}}>
            <div style={style.mediaLoading}></div>
            <div style={style.mediaLoading}></div>
            <div style={style.mediaLoading}></div>
          </div>}
          <img style={{background: '#999',height: '15rem',width: '100%',objectFit: 'cover'}} src={null || image} />
        </div>
        <div
          style={style.detailButton}
          onClick={()=>props.clickDetail(props.i)}
          onMouseEnter={()=>setDetailButtonHover({backgroundColor: colors.light_blue_900})}
          onMouseLeave={()=>setDetailButtonHover({backgroundColor: colors.light_blue_700})}>DETAIL</div>
      </div>
      {space}
    </div>
  );
}

function MatchGrid(props){
  const { children, screen } = props
  let grid;
  if( screen === 'Mobile' ){
    grid = 'auto'
  }else if( screen === 'Tablet' ){
    grid = 'auto auto'
  }else if( screen === 'Desktop' ){
    grid = 'auto auto auto'
  }
  const mobile={
    display: 'grid',
    gridTemplateColumns: grid,
  }
  return(
    <React.Fragment>
      <Desktop>
        <div style={mobile}>
          {children}
        </div>
      </Desktop>
      <Tablet>
        <div style={mobile}>
          {children}
        </div>
      </Tablet>
      <Mobile>
        <div style={mobile}>
          {children}
        </div>
      </Mobile>
    </React.Fragment>
  );
}

function MatchList(props){
  const { imageSlide, dataFromFetch, clickDetail} = props
  const style = {
    matchListBorder: {
      boxSizing: 'border-box',
      border: `4px solid ${colors.blue_grey_700}`,
      borderRadius: '4px',
      margin: '2rem 2rem 20% 2rem'
    },
    matchListTitle: {
      color: colors.blue_grey_700,
      fontSize: '2rem',
      fontFamily: 'Roboto, sans serif',
      margin: '2rem 2rem 0 2rem'
    }
  }
  return(
    <React.Fragment>
      <Desktop>
        <div style={style.matchListBorder}>
          <p style={style.matchListTitle}>Match list</p>
          <MatchGrid screen={'Desktop'}>
            {imageSlide.map((d,i)=>
              <MatchCard
                i={i}
                screen={'Desktop'}
                dataFromFetch={dataFromFetch}
                clickDetail={clickDetail}
                image={d}/>
            )}
          </MatchGrid>
        </div>
      </Desktop>
      <Tablet>
        <div style={style.matchListBorder}>
          <p style={style.matchListTitle}>Match list</p>
          <MatchGrid screen={'Tablet'}>
            {imageSlide.map((d,i)=>
              <MatchCard
                i={i}
                screen={'Tablet'}
                dataFromFetch={dataFromFetch}
                clickDetail={clickDetail}
                image={d}/>
            )}
          </MatchGrid>
        </div>
      </Tablet>
      <Mobile>
        <div style={style.matchListBorder}>
          <p style={style.matchListTitle}>Match list</p>
          <MatchGrid screen={'Mobile'}>
            {imageSlide.map((d,i)=>
              <MatchCard
                i={i}
                screen={'Mobile'}
                dataFromFetch={dataFromFetch}
                clickDetail={clickDetail}
                image={d}/>
            )}
          </MatchGrid>
        </div>
      </Mobile>
    </React.Fragment>
  );
}
export default MatchList;
