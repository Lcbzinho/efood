import { Home } from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import { ItalianRestaurant } from './pages/Restaurant'
import { JapaneseRestaurant } from './pages/JapaneseRestaurant'

const Rout = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/italian" element={<ItalianRestaurant />} />
    <Route path="/japanese" element={<JapaneseRestaurant />} />
  </Routes>
)
export default Rout
