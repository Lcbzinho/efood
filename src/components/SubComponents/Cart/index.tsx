import { CartCloseButton, CartCon, CartContainer, Total, TotalWrite } from "./styles"
import Close from '../../../assets/images/Icons/close.png'
import { ContinueButton } from "../ContinueButton"

type Props = {
    children: React.ReactNode
    CloseFunction: () => void
}

export const CartBody = ({children, CloseFunction}: Props) => {
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
                        <TotalWrite>R$ 182,90</TotalWrite>
                    </Total>
                        <ContinueButton>Continuar</ContinueButton>
                </div>
            </CartCon>
        </CartContainer>
    )
}