import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home'
import Login from '../pages/login'
import Error404 from '../pages/error404'
import Info from '../pages/info'

export default function AppRouter() {
  return (
      <Routes> 
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/info" element={<Info/>}/>
        <Route path="/*" element={<Error404/>}/>
      </Routes>

  )
}
