import { Suspense } from 'react'
import './App.css'
import Spinner, { Fallback } from './features/loading/Spinner';
import ForcedDelay from './components/utils/ForcedDelay'
import Main from './layouts/Main';
import { Provider } from 'react-redux';
import store from './store';

const Delay = ForcedDelay(2000);
function App() {
  return (
    <Provider store={store}>
      <Spinner/>
      <Suspense fallback={<Fallback/>}>
        <Delay/>
        <Main/>
      </Suspense>
    </Provider>
  )
}

export default App
