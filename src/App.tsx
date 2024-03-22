import { Suspense } from 'react'
import './App.css'
import Spinner from './components/Spinner'
import ForcedDelay from './components/utils/ForcedDelay'

const Delay = ForcedDelay(1000000);
function App() {
  return (
    <>
      <Suspense fallback={<Spinner/>}>
        <Delay/>
      </Suspense>
    </>
  )
}

export default App
