import { CartCloseButton, CartCon, CartContainer, Total, TotalWrite } from "./styles"
import Close from '../../../assets/images/Icons/close.png'
import { ContinueButton } from "../ContinueButton"
import { useSelector } from "react-redux"
import type { RootState } from "../../../store/indext"

type Props = {
    children: React.ReactNode
    CloseFunction: () => void
}

export const CartBody = ({children, CloseFunction}: Props) => {

    //Total Sum
    const TotalSum = () => {
        const items = useSelector((state: RootState) => state.cart)
        return items.reduce((acc, item) => acc + Number(item.preco), 0)
    }


    return (
        <CartContainer>
            <div className="Close">
                <CartCloseButton onClick={() => CloseFunction()}><img src={Close} /></CartCloseButton>
            </div>
            <CartCon>
                <div>
                    {children}
                </div>
                <div>
                    <Total>
                        <TotalWrite>Valor Total:</TotalWrite>
                        <TotalWrite>R$ {TotalSum()}</TotalWrite>
                    </Total>
                        <ContinueButton>Continuar</ContinueButton>
                </div>
            </CartCon>
        </CartContainer>
    )
}