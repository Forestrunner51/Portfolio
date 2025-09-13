import { useState } from 'react'
import Carousel from './Carousel'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <article>
        <h1> </h1>
      </article>
      <Carousel></Carousel>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
     
    </>
  )
}

export default App
