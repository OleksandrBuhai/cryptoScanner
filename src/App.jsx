
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Show from './pages/Show'

function App() {


  return (
    <>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/:id' element={<Show/>} />
    </Routes>
    </>
  )
}

export default App
