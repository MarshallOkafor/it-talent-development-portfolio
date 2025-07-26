import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>IT Talent Development Manager</h1>
      <p className="subtitle">Building High-Performance Technology Teams</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Years of Experience: {count + 10}
        </button>
        <p>
          Professional portfolio showcasing leadership in IT talent development, 
          team building, and strategic technology initiatives.
        </p>
      </div>
      <p className="read-the-docs">
        Welcome to my professional portfolio - Click above to see experience growth
      </p>
    </>
  )
}

export default App
