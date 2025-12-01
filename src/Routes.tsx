import { Home } from './pages/Home'
import { Routes, Route } from 'react-router-dom'

const Rout = () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
)
export default Rout
