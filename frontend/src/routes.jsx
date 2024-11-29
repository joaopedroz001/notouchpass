import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { App } from './App'

export function MainRoutes() {
  return ( 
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/' element={<App />} />
    </Routes>
  )
}