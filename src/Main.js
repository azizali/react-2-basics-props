import React from 'react'
import Button from './Button'
import List from './List'

function Main(){
  return (
    <div className="border p-5">
      <div className="highlight">Main content</div>
      <Button value="Click me" />
      <List />
    </div>
  )
}

export default Main