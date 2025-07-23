import './App.css'
import CardSet from './components/CardSet'

function App() {
  return (
    <>
      <header className="app-header">
        <h1 className="app-title">TinyTaps</h1>
        <p className="app-subtitle">Tap to reveal the hidden treasures</p>
      </header>
      <div className="card-grid-container">
        <CardSet />
      </div>
    </>
  )
}

export default App
