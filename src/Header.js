import React from 'react'
import Button from './Button'

function Header(){
  return (
    <div className="border p-3">
      <div>Header is this</div>
      <Button value="About" type="link" />
      <Button value="Contact" type="link" />
    </div>
  )
}

export default Header