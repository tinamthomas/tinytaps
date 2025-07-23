import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SelectableCard from './components/SelectableCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SelectableCard title="Bunny" description="Hop litte bunny hop hop hop" image="/images/bunny.jpg" />
    </>
  )
}

export default App
