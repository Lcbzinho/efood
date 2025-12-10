import { CartCloseButton, CartCon, CartContainer} from "./styles"
import Close from '../../../assets/images/Icons/close.png'
import { ContinueButton } from "../ContinueButton"

type Props = {
    children: React.ReactNode
    CloseFunction: () => void
    NextFunction: () => void
}

export const CartBody = ({children, CloseFunction, NextFunction}: Props) => {

    return (
        <CartContainer>
            <div className="Close">
                <CartCloseButton onClick={() => CloseFunction()}><img src={Close} /></CartCloseButton>
            </div>
            <CartCon>
                <div className="ContainerChildren">
                    {children}
                </div>
                <div className="ContinueButton">
                        <ContinueButton onClick={NextFunction}>Continuar</ContinueButton>
                </div>
            </CartCon>
        </CartContainer>
    )
}