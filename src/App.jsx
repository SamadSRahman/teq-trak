
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import TrackVehicles from './pages/TrackVehicles/TrackVehicles'
import Header from './components/Header/Header'

function App() {
 

  return (
   <div>
    <Header/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/trackVehicles' element={<TrackVehicles/>} />
      </Routes>
      </BrowserRouter>
   </div>
  )
}

export default App
