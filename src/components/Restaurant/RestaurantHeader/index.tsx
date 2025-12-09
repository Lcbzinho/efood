import { Background, HeaderContainer, HeaderImg, Restaurant } from './styles'
import Logo from '../../../assets/images/logo.png'
import { Link } from 'react-router'
import { useSelector } from 'react-redux'
import type { RootState } from '../../../store/indext'
import { useState } from 'react'
import { CartBody } from '../../SubComponents/Cart'
import { ItemsList } from '../../SubComponents/CartListItems'

export const RestaurantHeader = () => {
  const Processos = [
    <ItemsList />
  ]
  const ite = useSelector((state: RootState) => state.cart)
  const [clicked, setClicked] = useState(false)
  const [process, setProcess] = useState(0)

  //Close
  const HandleClose = () => {
    setClicked(!clicked)
  }

  return (
    <Background>
      {clicked ? (
        <CartBody CloseFunction={HandleClose}>
          {Processos[process]}
        </CartBody>
      ): null}
      <HeaderContainer>
        <Restaurant>
          <Link to="/">Restaurants</Link>
        </Restaurant>
        <HeaderImg src={Logo} />
        <Restaurant onClick={() => setClicked(!clicked)}>{ite.length} Product(s) in cart</Restaurant>
      </HeaderContainer>
    </Background>
  )
}
