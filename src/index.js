import './style.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

function App(){
  return(
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('body'))