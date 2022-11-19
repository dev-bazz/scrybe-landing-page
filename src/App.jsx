import './App.scss'
import LandingPage from './pages/landing-page'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<LandingPage />} />
    </Routes>
    </>

  )
}

export default App
