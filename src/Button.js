import React from 'react'

const style = {
  border: '1px solid gray',
  backgroundColor: 'white',
  padding: '10px'
}

export default function ({to='#', value='Click me', type='button'}){
  if(type === 'link'){
    return <a href={to}>{value}</a>
  
  } else if(type === 'submit'){
    return <input value={value} type="submit" />
  
  } else {
      return <button style={style}>{value}</button>
  }
}