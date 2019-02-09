import React from 'react'

export default function ({to='#', value='Click me', type='button'}){
  if(type === 'link'){
    return <a href={to}>{value}</a>
  
  } else if(type === 'submit'){
    return <input value={value} type="submit" />
  
  } else {
      return <button>{value}</button>
  }
}