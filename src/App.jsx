import Navar from './componenet/Navar'
import './App.css'
import { Router,Route ,Routes} from 'react-router'
import Home from './pages/Home'
import Hooks from './pages/Hooks'

function App() {


  return (
    <>
      <Navar data='Hooks'/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Hooks' element={<Hooks/>}/>
      </Routes>
    </>
  )
}

export default App
