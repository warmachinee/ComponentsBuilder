import React from 'react'

export function menu(props){
  const { color, width, height } = props
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width={(width)?width:24} height={(height)?height:24} viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none"/>
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill = {color} />
    </svg>
  );
}
export function logo(props){
  return(
    <svg id="Layer_3" data-name="Layer 3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="12" fill="#fff"/>
      <circle cx="12" cy="12.07" r="11.28" fill="#6eb1e2"/>
      <path d="M714.54,731H712.2v.59a4.81,4.81,0,0,1,.86,2.88c0,.17,0,.33,0,.49h.66a3.91,3.91,0,0,1,0-.49,4.81,4.81,0,0,1,.87-2.88Z" transform="translate(-701.37 -716.29)" fill="#37474f"/>
      <circle cx="12" cy="10.26" r="4.8" fill="#fff"/>
      <path d="M714.6,721.91a4.8,4.8,0,0,1-3.86,7.64,5.08,5.08,0,0,1-1.24-.16,4.8,4.8,0,1,0,5.1-7.48Z" transform="translate(-701.37 -716.29)" fill="#cfd8dc"/>
    </svg>
  );
}
export function close(props){
  const { color, width, height, style } = props
  return(
    <svg style={{width: (width)?width:'24px',height: (height)?height:'24px'}} xmlns="http://www.w3.org/2000/svg" width={(width)?width:24} height={(height)?height:24} viewBox="0 0 24 24">
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill={color} />
      <path d="M0 0h24v24H0z" fill="none"/>
    </svg>
  );
}
