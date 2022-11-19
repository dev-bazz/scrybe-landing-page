import './App.scss'
import LandingPage from './pages/landing-page-a/index'
import {Routes, Route} from 'react-router-dom'
import PageB from './pages/Landing-page-b'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='b' element={<PageB />} />
    </Routes>
    </>

  )
}

export default App
