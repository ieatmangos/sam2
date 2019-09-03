import React, { Component, Fragment } from 'react'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import './App.css';




export class App extends Component {
  render() {
    return (
      <Fragment>
        <div className='app'>
          <Header />
          <Main />


        </div>
        <Footer />

      </Fragment>
    )
  }
}

export default App
