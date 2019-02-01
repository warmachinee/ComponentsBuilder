import React from 'react'

export default function TestHooks(props){
  const [ name, setName ] = React.useState('TestHooksasdfg')
  function show(e){
    setName(e.target.value);
    console.log(name);
  }
  return(
    <input
      value={name}
      onChange={(e)=>show(e)} />
  );
}
