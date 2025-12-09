import { useSelector } from "react-redux";
import type { RootState } from "../../../store/indext";
import { CartItems } from '../../SubComponents/CartItem'


export const ItemsList = () => 
    {
    const items = useSelector((state: RootState) => state.cart)

    return (
        items.map((item) =>
            (
                <CartItems key={item.nome} item={item} img={item.foto} price={item.preco} title={item.nome}/>
            ))
        )
}