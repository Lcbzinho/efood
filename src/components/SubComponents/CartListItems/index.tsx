import { useSelector } from "react-redux";
import type { RootState } from "../../../store/indext";
import { CartItems } from '../../SubComponents/CartItem'
import { CartItemListDiv, Total, TotalWrite } from "./styles";


export const ItemsList = () => 
    {
    const items = useSelector((state: RootState) => state.cart)

    //Total Sum
    const TotalSum = () => {
        const items = useSelector((state: RootState) => state.cart)
        const TotalPrice = items.reduce((acc, item) => acc + Number(item.preco), 0).toLocaleString("pt-br", {style: 'currency', currency: "BRL"})
        return TotalPrice
    }

    return (
        <>
            <CartItemListDiv>
            {items.map((item) =>
                (
                    <CartItems key={item.nome} item={item} img={item.foto} price={item.preco} title={item.nome}/>
                ))}
            </CartItemListDiv>
            <Total>
                <TotalWrite>Valor Total:</TotalWrite>
                <TotalWrite>{TotalSum()}</TotalWrite>
            </Total>
            </>
        )
}