import { useState } from 'react'
import './styles.css'
import { Card } from './card'

function App() {

  return (
    <>
      <div id="container">
        <h1>Different Counters</h1>
        <div id="cards">
          <Card value={1} default={25} />
          <Card value={10} default={251} />
          <Card value={100} default={252} />
          <Card value={1000} default={253} />
        </div>
      </div>
    </>
    
  )
}

export default App