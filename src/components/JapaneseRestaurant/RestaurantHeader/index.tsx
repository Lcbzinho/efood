import { Background, HeaderContainer, HeaderImg, Restaurant } from "./styles"
import Logo from '../../../assets/images/logo.png'
import { Link } from "react-router"

type Props = {
    itens: number
}

export const RestaurantHeader = ({ itens }: Props) => {
    return(
        <Background>
            <HeaderContainer>
                <Restaurant><Link to="/">Restaurants</Link></Restaurant>
                <HeaderImg src={Logo}/>
                <Restaurant>{itens} Product(s) in cart</Restaurant>
            </HeaderContainer>
        </Background>
    )
}