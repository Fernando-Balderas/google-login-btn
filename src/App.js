import { Link } from 'react-router-dom'


import './App.css'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/login">
          Login
        </Link>
      </header>
    </div>
  )
}

export default App
